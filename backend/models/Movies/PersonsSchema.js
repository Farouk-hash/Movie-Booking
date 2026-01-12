import mongoose from 'mongoose';

export const PersonSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    role: { type: String, required: true, trim: true }, // Producer, Director, Actor, Singer
    img: { type: String } // image URL
}, {
    _id: false, 
    timestamps: false 
});