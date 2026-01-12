import mongoose from 'mongoose';
import {Booking} from '../models/Booking/BookingSchema.js';
import { MoviesSchema } from '../models/Movies/MovieSchema.js';
import User from "../models/UserSchema.js";
import { asyncHandler } from '../utils/asyncHandler.js';
import { AppError } from '../utils/AppError.js';

export const createBooking = async(req , res)=>{
    const session = await mongoose.startSession();
    session.startTransaction();
        try{
            // Authorization ; 
            const user = req.user ;
            if(!user){
                return res.status(401).json({
                    success:false , 
                    message: 'User authentication required',
                });
            }
            const userID = user._id ; 

            // Extracting Request's body
            const { 
                    movieID, 
                    customer = user.username || user.fullName, 
                    audi, 
                    seats, 
                    basePrice, 
                    amount, 
                    currency,
                    showTime, 
                    paymentMethod,
                    paymentId 
                } = req.body;

            // Validators ; 
            if(!movieID || !audi || !showTime){
                await session.abortTransaction();
                return res.status(400).json({
                    success:false , 
                    message:'Missing one of keys[MovieID , Audi , ShowTime]'
                });
            }
            if(!Array.isArray(seats) || seats.length === 0){
                await session.abortTransaction();
                return res.status(400).json({
                    success:false , 
                    message:'Seats are required'
                });
            }

            if(typeof amount !== 'number' ||typeof basePrice !== 'number'){
                await session.abortTransaction();
                return res.status(400).json({
                    success:false , 
                    message:'Amounts || Baseprice must be numerical values'
                });
            }

            // check if user-id , movie-id is valid ; 
            const [movieExists , UserExists] = await Promise.all([
                MoviesSchema.findById(movieID).session(session),
                User.findById(userID).session(session)
            ]);
            console.log(`USER_ID: ${UserExists} , MOVIE_ID: ${movieExists}`);
            
            if(!movieExists || !UserExists){
                await session.abortTransaction();
                return res.status(400).json({
                    success:false, 
                    message:'Invalid Ids'
                });
            }
            
            // Check for duplication ; 
            const existingBooking = await Booking.findOne({
                userID , 
                movieID , 
                showTime ,
                'seats.seatId': { $in: seats.map(seat => seat.seatId) }
            }).session(session);

            if (existingBooking) {
                await session.abortTransaction();
                return res.status(409).json({
                    success: false,
                    message: 'Some seats are already booked for this show'
                });
            }

            const bookingData = {
                    movieID,
                    userID,
                    customer,
                    audi,
                    seats,
                    basePrice,
                    amount,
                    currency: currency.toUpperCase(),
                    showTime: new Date(showTime),
                
                    // Payment details (optional for now)
                    paymentMethod,
                    paymentId,
                    status: 'confirmed', // Auto-confirm for now
                    paymentStatus: 'paid' // Auto-paid for testing
                };

                // Create booking
                const newBooking = await Booking.create([bookingData],{session});
                await session.commitTransaction();
                return res.status(201).json({
                    success: true,
                    message: 'Booking created successfully',
                    data: {
                        booking: newBooking,
                        bookingId: newBooking._id,
                        totalSeats: newBooking.totalSeats,
                        formattedShowTime: newBooking.formattedShowTime
                    }
                });
        }
        catch(error){
            await session.abortTransaction();
            return res.status(500).json({
                success:false , 
                message:'Server Error Occured',
                error
            })
        }
        finally{
            session.endSession();
        }
}

// get booking for authenticated user ; 
export const getBooking = asyncHandler(async(req,res)=>{

    if (!req.user) throw new AppError('User authentication required', 401);

    const userID = req.user._id ; 
    const user = await User.findById(req.user._id);
    if (!user) throw new AppError('Invalid User ID', 404);

    const query = {userID};

    const {status , paymentMethod , page=1 , limit=10 } = req.query ; 
    if(paymentMethod && String(paymentMethod).trim().toLowerCase() !== 'all'){
        query.paymentMethod = String(paymentMethod).trim().toLowerCase();    
    }
    if(status && String(status).trim().toLowerCase() !== 'all'){
        query.status = String(status).trim().toLowerCase();
    }

    // Pagination calculation
    const pageNumber = parseInt(page);
    const limitNumber = parseInt(limit);
    const skip = (pageNumber - 1) * limitNumber;

    // Get total count for pagination info
    const totalCount = await Booking.countDocuments(query);

    const items = await Booking.find(query)
    .populate('movieID','title poster duration')
    .populate('userID','username email')
    .sort({createdAt:-1})
    .skip(skip)
    .limit(limitNumber)
    .select('-__v')
    .lean() ;
    
    return res.status(200).json({
        success: true,
        data: items,
        count: items.length,
        pagination: {
            currentPage: pageNumber,
            totalPages: Math.ceil(totalCount / limitNumber),
            totalItems: totalCount,
            itemsPerPage: limitNumber,
            hasNext: pageNumber < Math.ceil(totalCount / limitNumber),
            hasPrev: pageNumber > 1
        }
    });
})

// get booking by id for authenticated user ; 
export const getBookingByID = asyncHandler(async(req,res)=>{
    if (!req.user) throw new AppError('User authentication required', 401);
  
    const user = await User.findById(req.user._id);
    if (!user) throw new AppError('User Not Found', 401);

    const {bookingId} = req.params ; 
    if (!mongoose.Types.ObjectId.isValid(bookingId)) throw new AppError('Invalid booking ID format', 400);

    const booking = await Booking.findById(bookingId) 
    .populate('movieID', 'title poster duration genre rating')
    .populate('userID', 'username email fullName phone');

    if (!booking) throw new AppError('Booking not found', 404);

    // Check if user owns the booking or is admin
    if (booking.userID._id.toString() !== req.user._id.toString())  throw new AppError('Access denied to this booking', 403);

    return res.status(200).json({
        success: true,
        data: booking
    });

});

// delete booking via id ;
export const deleteBooking = asyncHandler(async(req,res)=>{
    if (!req.user) throw new AppError('User authentication required', 401);
    const userID = req.user._id ; 
    const user = await User.findOne(userID);
    if (!user) throw new AppError('User Not Found', 404);
    
    const {bookingId} = req.params ; 
    if (!mongoose.Types.ObjectId.isValid(bookingId)) throw new AppError('Invalid booking ID format', 400);

    const booking = await Booking.findOneAndDelete({_id:bookingId , userID}) ;
    if (!booking) throw new AppError('Booking not found', 404);


    return res.status(204).json({
        success: true,
        data: [],
        message:'DELTED'
    });

})