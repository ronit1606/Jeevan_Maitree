const { Double } = require("mongodb");
const mongoose = require("mongoose");
const validator=require("validator");

const bookAppSchema=new mongoose.Schema({
    // id: {
    //     type : String,
    //     required : true,
    // },

    fname: {
        type : String,
        required : true

    },

    mname : {
        type: String,
    },

    lname : {
        type:String,
        required:true
    },

    dob : {
        type: String,
        required:true
    },

    age : {
        type: Number,
        required:true
    },

    mob : {
        type: Number,
        required:true
    },

    email : {
        type: String,
        required:true
    },

    state : {
        type: String,
        required:true
    },

    district : {
        type: String,
        required:true
    },

    address : {
        type: String,
        required:true
    },

    pincode : {
        type: String,
        required:true
    },

    dtofapp : {
        type: String,
        required:true
    },

    hosp : {
        type: String,
        required:true
    },

    dr : {
        type: String,
        required:true
    },

    undertreatdr : {
        type: String,
        required:true
    },

    gen : {
        type: String,
        required:true
    }
});

const BookAppointment = mongoose.model("Book Appointments",bookAppSchema );
module.exports=BookAppointment;