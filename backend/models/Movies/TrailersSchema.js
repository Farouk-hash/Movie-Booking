import mongoose from "mongoose";
import {PersonSchema} from "./PersonsSchema.js";


export const TrailersSchema = new mongoose.Schema({
    title:{type:String , trim:true , required:true} , 
    genre:[{type:String,trim:true}] , 
    duration:{
        hours:{type:Number,required:true},
        minutes:{type:Number , required:true}
    } , 
    year:{type:Number} , 
    description:{type:String , trim:true},
    thumbnail:{type:String,trim:true},//Image ,
    videoUrl:{type:String , trim:true},//"https://www.youtube.com/watch?v=coOKvrsmQiI"
    director:[PersonSchema],
    producer:[PersonSchema],
    singer:[PersonSchema],
},{
    _id:false , 
});
