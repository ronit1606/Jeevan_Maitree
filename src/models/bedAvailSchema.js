const mongoose = require("mongoose");
const validator=require("validator");

const bedAvailSchema=new mongoose.Schema({
    // id: {
    //     type : String,
    //     required : true,
    // },

    gen_tot: {
        type : Number,
        required : true

    },

    gen_occ : {
        type: Number,
        required:true
    },

    oxy_tot : {
        type:Number,
        required:true
    },

    oxy_occ : {
        type:Number,
        required:true
    },

    icu_without_tot : {
        type:Number,
        required:true
    },

    icu_without_occ : {
        type:Number,
        required:true
    },

    icu_with_tot : {
        type:Number,
        required:true
    },

    icu_with_occ : {
        type:Number,
        required:true
    }
});

const BedAvailability = mongoose.model("Bed Availability",bedAvailSchema );
module.exports=BedAvailability;