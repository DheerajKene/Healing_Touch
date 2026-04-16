const express = require('express');
const userRouter = express.Router();
const UserModel = require('../models/usermodel');

userRouter.post('/register', async (req, res)=>{
    const{name, DOB, email, password, role } = req.body;
    if(!name || !DOB || !email || !password || !role){
        res.send(`Please enter correct creadiantials...`);
    }
    try {
        const exstingUser = await UserModel.findOne({name, email});
        if(exstingUser){
            res.status(401).json({
                message:`User already registered...`
            });
        }

        const user = new UserModel({
            name,
            DOB,
            email,
            password,
            role
        });
        res.status(201).json({
            message:`User registered successfully`
        });
        await user.save();
    } catch (error) {
        
    }
})