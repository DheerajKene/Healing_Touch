const mongoose = require('mongoose');


const serviceSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:`User`,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    care_for:{
        type:String,
        required:true,
        enum:["Arthritis","Cancer","Dementia","Diabetes","Stroke","Alzheimer’s Disease","Cardiovascular Disease","Traumatic Brain Injury","Parkinson’s Disease"]
    },
    name_of_service:{
        type:String,
        required:true,
        enum:["Our Caregivers", "Attendant Services", "Nursing Services","Elderly Care","Doctor at Home","Physiotherapist","Rehabilitation at Home"]
    },
    age:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    service_starts:{
        type:Date,
        default:Date.now
    }
},
{
    version_key:false
});

const serviceModel = mongoose.model("service", serviceSchema);
module.exports = serviceModel