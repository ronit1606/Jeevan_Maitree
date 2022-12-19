const mongoose = require("mongoose");
const validator=require("validator");

const patientRegSchema=new mongoose.Schema({
    // id: {
    //     type : String,
    //     required : true,
    // },
    pname: {
        type:String,
        required:true
    },

    pemail: {
        type:String,
        required:true
    },

    pmn : {
        type: Number,
        required:true
    },

    page: {
        type:String,
        required:true
    },

    pheight: {
        type:String,
        required:true
    },

    pweight: {
        type:String,
        required:true
    },

    pbp: {
        type:String,
        required:true
    },

    ppass: {
        type:String,
        required:true
    }
});

const PatientRegistration = mongoose.model("Patient Registrations",patientRegSchema );
module.exports=PatientRegistration;