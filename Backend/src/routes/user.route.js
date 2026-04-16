const express = require('express');
const userRouter = express.Router();
const UserModel = require('../models/usermodel');
const bcrypt  = require('bcrypt');
const saltrounds = 5;


//registering the user
userRouter.post('/register', async (req, res)=>{
    const{name, DOB, email, password, role } = req.body;
    if(!name || !DOB || !email || !password || !role){
        res.send(`Please enter correct creadiantials...`);
    }
    try {
        //checking if user already exist or not
        const exstingUser = await UserModel.findOne({name, email});
        if(exstingUser){
            res.status(401).json({
                message:`User already registered...`
            });
        }

        //hashing the password
        const hashedPassword = await bcrypt.hash(password, saltrounds);

        //cerating new user
        const user = new UserModel({
            name,
            DOB,
            email,
            password,
            role
        });

        await user.save();
        console.log("User registerd successfully");
        res.status(201).json({
            message:`User registered successfully`
        });
        
    } catch (error) {
        console.log("error while registering the user")
        res.status(500).json({
            message:`Error while registering the user:${error.message}`
        });
    }
})