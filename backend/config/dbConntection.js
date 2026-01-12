import mongoose from "mongoose";


export const DB_CONNECTION = async()=>{
    await mongoose.connect('mongodb+srv://am5777073_db_user:UH4P4xVPUo1r0gnq@cluster0.2w3rrck.mongodb.net/MovieBooking')
    .then(()=>{
        console.log('DB CONNECTED SUCCEFULLY');
    })
    .catch((err)=>{
        console.log('ERROR OCCURE WHILE TRY CONNECTING TO DB',err);
    })
}