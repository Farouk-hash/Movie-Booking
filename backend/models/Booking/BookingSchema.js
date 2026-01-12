



import mongoose from 'mongoose';


const BookingSchema = new mongoose.Schema({

    // References [movieID ,UserID] - Normalization ;
    movieID : {
        type:mongoose.Schema.Types.ObjectId , ref:'Movies',
        required: [true, 'Movie ID is required'],
    },

    userID : {
        type:mongoose.Schema.Types.ObjectId , ref:'User',
        required:[true,'User ID is required'],
    },

    customer : {type:String} ,


    // Payment-Details ;
    status:{
        type:String , 
        enum:
            {
                values:['pending','paid','confirmed','canceled','active','upcoming'],
                message:'Invalid Booking Status'
            }
        ,
        default:'pending'
    },
    
    paymentStatus:{
        type:String , 
        enum:['failed' , 'pending','paid'],
        default:'pending'
    },
    paymentMethod:{type:String},
    paymentSessionId:{type:String},
    paymentIntentId:{type:String},

    // ShowTimes +Seats ;
    showTime:{type:Date}, 
    audi:{type:String, required: [true, 'Auditorium is required'],trim:true} , 

    seats:[{
        type:mongoose.Schema.Types.Mixed , 
        required:true , 
        validate:{
            validator:(v)=>Array.isArray(v) && v.length > 0,
            message:'Seats must contain at least one item',
        }
    }],

    // Pricing ;
    basePrice: {type:Number , required:[true , 'Base price is required'] , min:[0,'Base price can\'t be negative']}, 
    amount: {type:Number, required:[true , 'Total amount is required'] , min:[0,'Total amount can\'t be negative']},
    currency: {type:String , trim:true , uppercase:true , }
},{
     timestamps: true, 
});
// Indexes :
BookingSchema.index({movieID:1 , userID:1});
BookingSchema.index({ showTime: 1 });
BookingSchema.index({ status: 1 });
BookingSchema.index({ paymentStatus: 1 });

// Virtual :
BookingSchema.virtual('totalSeats').get(function(){
    return this.seats.length ;
});

BookingSchema.virtual('formattedShowTime').get(function() {
    return this.showTime.toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
});

export const Booking = mongoose.models.Booking || mongoose.model('Booking',BookingSchema) ; 
