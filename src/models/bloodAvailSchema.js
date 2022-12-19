const mongoose = require("mongoose");
const validator=require("validator");

const bloodAvailSchema=new mongoose.Schema({
    // id: {
    //     type : String,
    //     required : true,
    // },

    apos: {
        type : Number,
        required : true

    },

    aneg : {
        type: Number,
        required:true
    },

    bpos : {
        type:Number,
        required:true
    },

    bneg : {
        type:Number,
        required:true
    },

    opos : {
        type:Number,
        required:true
    },

   oneg : {
        type:Number,
        required:true
    },

    abpos : {
        type:Number,
        required:true
    },

    abneg : {
        type:Number,
        required:true
    }
});

const BloodAvailability = mongoose.model("Blood Availability", bloodAvailSchema );
module.exports=BloodAvailability;