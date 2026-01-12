import express from 'express';
import { authMiddleware } from '../middlwares/auth.js';
import { createBooking ,deleteBooking,getBooking , getBookingByID } from '../controllers/BookingController.js';

export const BookingRoutes = express.Router();
BookingRoutes.use(authMiddleware);

BookingRoutes.post('/',createBooking);

// GET /api/bookings?page=1&limit=10&status=confirmed&paymentMethod=card
BookingRoutes.get('/', getBooking);
// GET /api/bookings/6926f6163e2561a2529878ae
BookingRoutes.get('/:bookingId', getBookingByID);
// DELETE /api/bookings/6926f6163e2561a2529878ae
BookingRoutes.delete(':bookingId',deleteBooking);
