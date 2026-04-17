require('dotenv').config()
const UserModel = require('../models/usermodel');
const jwt = require('jsonwebtoken')

const auth = (req, res, next)=>{
    const token = req.headers.Authorization.split(' ')[1]

    if(!token){
        res.status(400).json({
            message:`Access token required, please login again`
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        console.log(decoded);
        req.userId = decoded.id
        req.user = UserModel.findById(userId);
        next();
    } catch (error) {
        res.status(403).json({
            message:`invalid or expired token:${error.message}`
        });
    }
}
