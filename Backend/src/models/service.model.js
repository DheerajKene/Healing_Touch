const mongoose = require('mongoose');


const serviceSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:`User`,
        required:true
    },
    name_of_service:{
        type:String,
        required:true,
        enum:["Our Caregivers", "Attendant Services", "Nursing Services","Elderly Care","Doctor at Home","Physiotherapist","Rehabilitation at Home"]
    }
})