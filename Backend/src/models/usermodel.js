const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    role:{
        type:String,
        required:true,
        enum:['Admin', 'caregiver','user']
    },
    name:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
    
},{
    version_key:false
});

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;