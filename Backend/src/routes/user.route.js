const express = require('express');
const userRouter = express.Router();
const UserModel = require('../models/usermodel');
const bcrypt  = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const saltrounds = 5;


//registering the user
userRouter.post('/register', async (req, res)=>{
    const{name, dob, mobile, password, role } = req.body;
    if(!name || !dob || !mobile || !password || !role){
        return res.status(400).json({
            message: "Please enter correct credentials..."
        });
    }
    try {
        //checking if user already exist or not
        const exstingUser = await UserModel.findOne({name, mobile});
        if(exstingUser){
            return res.status(401).json({
                message:`User already registered...`
            });
        }

        //hashing the password
        const hashedPassword = await bcrypt.hash(password, saltrounds);

        //cerating new user
        const user = new UserModel({
            name,
            dob,
            mobile,
            password: hashedPassword, // Use hashed password
            role
        });

        await user.save();
        console.log("User registered successfully");
        res.status(201).json({
            message:`User registered successfully`
        });
        
    } catch (error) {
        console.log("error while registering the user")
        res.status(500).json({
            message:`Error while registering the user:${error.message}`
        });
    }
});


//login the user

userRouter.post('/login', async (req, res)=>{
    const {role, name, password} = req.body;
    if(!role || !name || !password){
        return res.status(400).json({
            message:`please enter correct login credentials`
        });
    }

    try {
        const user = await UserModel.findOne({name});
        if(!user){
            return res.status(401).json({
                message:`Invalid credentials`
            });
        }

        //checking password is valid or not.
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(isPasswordValid){
            const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
            return res.status(200).json({
                message:`User Login successfully`,
                token
            });
        }else{
            return res.status(401).json({
                message:`Wrong password`
            });
        }
    } catch (error) {
        return res.status(500).json({
            message:`error in fetching profile:${error.message}`
        });
    }
});

//for profile to show user name on top

userRouter.get('/profile', async (req, res)=>{
    
    try {
        const user = await UserModel.findById(req.userId);

        if(!user){
            res.status(500).json(
            {message:`user not found`}
        );
        }
        res.status(200).json({
            Name:user.name,
            mobile_no:user.mobile_no
        })
    } catch (error) {
        res.status(500).json({
            message:`error found while fetching user:${error.message}`
        });
    }

});

module.exports = userRouter;