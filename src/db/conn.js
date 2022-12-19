const mongoose = require("mongoose");
//creating a database

const DB = 'mongodb+srv://jeevanmaitree:jeevanmaitree168@cluster0.oj36q5l.mongodb.net/jeevan_maitree?retryWrites=true&w=majority';
mongoose.connect(DB).then(()=>{
    console.log("connection successful");
}).catch((error)=>{
    console.log(error);
})