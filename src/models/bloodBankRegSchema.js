const mongoose = require("mongoose");
const validator=require("validator");

const bloodBankRegSchema=new mongoose.Schema({
    // id: {
    //     type : String,
    //     required : true,
    // },

    bbname: {
        type : String,
        required : true

    },

    bbemail : {
        type: String,
        required:true
    },

    bbadd : {
        type: String,
        required:true
    },

    bbstate: {
        type:String,
        required:true
    },

    bbcity: {
        type:String,
        required:true
    },

    bbphone: {
        type:String,
        required:true
    },

    bbpin: {
        type:String,
        required:true
    },

    bbpass: {
        type:String,
        required:true
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

const BloodBankRegisteration = mongoose.model("Blood Bank Registrations",bloodBankRegSchema );
module.exports=BloodBankRegisteration;