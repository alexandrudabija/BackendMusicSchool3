const mongoose = require('mongoose');

const user = new mongoose.Schema({
    // _id:null |undefined |String ,
    idUser: String,
    firstname: String,
    lastname: String,
    country:String,
    email: String,
    age :String,
    password :String,
    dateRegistration:Date,
    orders : Array,
    // __v:null |undefined |Number
});




module.exports= User = mongoose.model('user',user);