const mongoose = require("mongoose");
const validator=require("validator");

const hosRegSchema=new mongoose.Schema({
    // id: {
    //     type : String,
    //     required : true,
    // },

    hname: {
        type : String,
        required : true

    },

    hemail : {
        type: String,
        required:true
    },

    hadd : {
        type: String,
        required:true
    },

    hstate : {
        type: String,
        required:true
    },

    hcity : {
        type: String,
        required:true
    },

    hphone : {
        type: Number,
        required:true
    },

    hpin : {
        type: Number,
        required:true
    },
    
    hpass: {
        type:String,
        required:true
    },
    gen_tot: {
        type : Number,
        

    },

    gen_occ : {
        type: Number,
        
    },

    oxy_tot : {
        type:Number,
        
    },

    oxy_occ : {
        type:Number,
        
    },

    icu_without_tot : {
        type:Number,
       
    },

    icu_without_occ : {
        type:Number,
        
    },

    icu_with_tot : {
        type:Number,
        
    },

    icu_with_occ : {
        type:Number,
        
    },
    apos: {
        type : Number,
        

    },

    aneg : {
        type: Number,
       
    },

    bpos : {
        type:Number,
        
    },

    bneg : {
        type:Number,
        
    },

    opos : {
        type:Number,
       
    },

   oneg : {
        type:Number,
        
    },

    abpos : {
        type:Number,
        
    },

    abneg : {
        type:Number,
        
    }
});

const HospitalRegisteration = mongoose.model("Hospital Registrations",hosRegSchema );
module.exports=HospitalRegisteration;