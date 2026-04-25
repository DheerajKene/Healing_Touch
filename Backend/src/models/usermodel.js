const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    DOB:{
        type:String,
        required:true
    },
    mobile_no:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        enum:['Doctor', 'paitent']
    }
},{
    version_key:false
});

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;