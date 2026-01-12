


import jwt from 'jsonwebtoken';
import User from '../models/UserSchema.js';
const SECRET_KEY = '1234';


export const authMiddleware = async(req , res , next)=>{
    try{
        const authHeader = req.headers.authorization ; 

        // Check if Authorization header exists and has correct format
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({
                success: false,
                message: 'Access denied. No token provided or invalid format. [MIDDLEWARE]',
            });
        }

        // Check if token is valid after extracting 
        const token = authHeader.split(' ')[1];
        if(!token){
            return res.status(401).json({
                success:false , 
                message:"Invalid Token",
            })
        }

        // Check User Existense Via Token-User-ID ; 
        const jwtVerification  = jwt.verify(token , SECRET_KEY);
        const user = await User.findById(jwtVerification.id).select('-password');
        if(!user){
            return res.status(401).json({
                success:false,
                message:"Invalid user",
            });
        }
        console.log('Passed middleware succefully');
        // Attach user to request
        req.user = user ;
        next();
    }
    catch(err){
        return res.status(500).json({
            success:false , 
            message:"Internal Server Error",
            err
        });
    }
}