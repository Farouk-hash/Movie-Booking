import mongoose, { mongo } from "mongoose";
import {SlotsSchema} from "./SlotsSchema.js";
// import { Persons } from "./PersonsSchema.js";
import { PersonSchema } from "./PersonsSchema.js";
import { TrailersSchema } from "./TrailersSchema.js";

const Movies = new mongoose.Schema({
    // Denormalization (1-1) ; 
    type: {
      type: String,
      enum: ["normal", "featured", "releaseSoon", "latestTrailers"],
      default: "normal",
    },

    title:{type:String ,trim:true,required:[true , 'Movie Title Is Required']},

    categories:[{type:String , trim:true , 
        enum:{
        values: ['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi', 'Thriller', 'Romance', 'Adventure', 'Fantasy', 'Animation', 'Documentary'],
        message:'Invalid movie category ID',
      }}
    ],

    image:{type:String , trim:true},
    duration:{
        hours:{type:Number},
        minutes:{type:Number},
    },

    rating:{type:Number},
    genre:{type:String},

    
    slots: [SlotsSchema],
    
    seatPrices: {
      standard: { type: Number, default: 0 },
      recliner: { type: Number, default: 0 },
    },

    auditorium: { type: String, trim: true, default: "Audi 1" },

    // Embded Document Denormalization [1-M] ; 
    cast: [PersonSchema],
    directors: [PersonSchema],
    producers: [PersonSchema],  

    story: { type: String, trim: true },

    // Embded Documnent Denromalization [1-1] ; 
    latestTrailer:TrailersSchema,
},{
    timestamps:true ,
});


export const MoviesSchema = mongoose.models.Movies || mongoose.model('Movies',Movies);
