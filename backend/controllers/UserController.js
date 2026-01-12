import User from "../models/UserSchema.js";
import jwt from "jsonwebtoken"; 
import bcrypt from "bcrypt"; 
import { AppError } from "../utils/AppError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const generateToken = (payload, expiresIn = '7d') => {
    return jwt.sign(
        payload, 
        '1234', 
        { expiresIn }
    );
};

export const registration = asyncHandler(async (req, res) => { 
   
    console.log('Start regisration');
    const { fullName, username, email, phonenumber, password } = req.body || {};
    
    if (!fullName || !username || !email || !phonenumber || !password) throw new AppError('Missing data', 400);

    const trimmedFullName = fullName.trim();
    const trimmedUsername = username.trim();

    if (trimmedFullName.length < 3 || trimmedUsername.length < 3) throw new AppError('Invalid username or full name', 400); 

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) throw new AppError('Invalid email format', 400); 

    // Validate phone number (basic validation)
    const phoneRegex = /^\+?[\d\s-()]{10,}$/;
    if (!phoneRegex.test(phonenumber)) throw new AppError('Invalid phone number format', 400); 

    // Validate password strength
    if (password.length < 6) throw new AppError('Password must be at least 6 characters long', 400); 

    const [userExistedByEmail, userExistedByName] = await Promise.all([
        User.findOne({ email: email.toLowerCase() }),
        User.findOne({ username: trimmedUsername.toLowerCase() })
    ]);

    if (userExistedByEmail)throw new AppError('User already existed by email', 400);
    if (userExistedByName) throw new AppError('User already existed by name', 400);
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const createUser = await User.create({
        fullName: trimmedFullName,
        username: trimmedUsername,
        email: email.toLowerCase(),
        phonenumber: phonenumber.trim(),
        password: hashedPassword,
    });

    const token = generateToken({ id: createUser._id });
    const userToResponse = {
        fullName: createUser.fullName, 
        username: createUser.username, 
        email: createUser.email, 
        id: createUser._id 
    };

    return res.status(201).json({ 
        success: true, 
        data: {
            user: userToResponse,
            token: token
        }
    });

});

export const login = async(req , res)=>{
    const {email , password} = req.body || {};
    if(!email || !password){
        return res.status(400).json({
            success:false,
            message:"All fields are required",
        });
    }

    const user = await User.findOne({email:email});
    if(!user){
        return res.status(400).json({
            success:false,
            message:"Invalid email or password",
        });
    }
    const isMatched = await bcrypt.compare(password , user.password);
    if(!isMatched){
        return res.status(400).json({
            success:false,
            message:"Invalid email or password",
        });
    }

    const token = generateToken({id:user._id});
    return res.status(200).json({
        success:true , 
        message:'User login',
        data:{
            id:user._id , 
            email:user.email , 
            token:token
        }
    });
}