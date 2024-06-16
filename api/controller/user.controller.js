import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const test = (req, res) => {
    res.send('Hello World!');
}

export const signUp = async (req, res , next) => {
    const {name,email,password} = req.body;
    const hashPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({name,email,password:hashPassword});
    try {
        await newUser.save();
        res.status(201).json({message: 'User created successfully'
    , success: true});
    } catch (error) {
        res.status(500).json({message: 'Error: ', error
        , success: false});
        next(error);
    }
}

export const  signIn = async (req, res, next) => {
    const {email,password} = req.body;
    try {
        const user = await User.findOne({email:email});
        if(!user){
           return res.status(404).json({message: 'wrong user credentials' , success: false});
        }
        const passwordIsValid = bcrypt.compareSync(password, user.password);
        if(!passwordIsValid){
          return  res.status(401).json({message: 'wrong user credentials', success: false});
        }
        const  token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: 86400});
        const refreshToken = jwt.sign({id: user._id}, process.env.REFRESH_JWT_SECRET, {expiresIn: 86400});
        const {password: userPassword, ...userWithoutPassword} = user._doc;
        res.cookie('token', token, {httpOnly: true, secure: true, sameSite: 'strict'});
        res.cookie('refreshToken', refreshToken, {httpOnly: true, secure: true, sameSite: 'strict'});
      return  res.status(200).json({message: 'User signed in successfully', success: true,user: userWithoutPassword});
    }
    catch (error) {
        console.log(error);
        res.status(500).json({message: 'Error: ', error, success: false});
    }
}