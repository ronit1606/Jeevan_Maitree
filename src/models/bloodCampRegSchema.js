const { Double } = require("mongodb");
const mongoose = require("mongoose");
const validator=require("validator");

const bloodCampRegSchema=new mongoose.Schema({
    // id: {
    //     type : String,
    //     required : true,
    // },

    mantype: {
        type : String,
        required : true

    },

    manname : {
        type: String,
        required:true
    },

    manmn : {
        type:Number,
        required:true
    },

    manemail : {
        type: String,
        required:true
    },

    campname : {
        type: String,
        required:true
    },

    campadd : {
        type: String,
        required:true
    },

    state : {
        type: String,
        required:true
    },

    distrcit : {
        type: String
    },

    bloodbank : {
        type: String
    },

    campdt : {
        type: String,
        required:true
    },

    strttym : {
        type: String,
        required:true
    },

    endtym : {
        type: String,
        required:true
    },

    lat : {
        type: String
    },

    long : {
        type: String
    },
});

const BloodCampRegisteration = mongoose.model("Blood Camp Registrations",bloodCampRegSchema );
module.exports=BloodCampRegisteration;