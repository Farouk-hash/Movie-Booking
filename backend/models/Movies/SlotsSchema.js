
import mongoose from "mongoose";

export const SlotsSchema = new mongoose.Schema({
    time:{type:Number , required:true},
    day:{type:Date , required:true},
    ampm:{type:String , enum:['AM','PM'],default:'AM'},
},
{
    _id:false , 
    timestamps:false
}
);