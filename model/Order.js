const mongoose = require('mongoose');

const order = new mongoose.Schema({
    // _id:null |undefined |String ,
    idUser: String,
    email: String,
    firstname: String,
    lastname: String,
    country: String,
    street: String,
    zipcode: String,
    city: String,
    card: String,
    ll_aa: String,
    cvc: String,
    idOrder:  String,
    items : Array|[],
    Total :Number,
   currency : String,
   dateOrder:Date,
//    __v:null |undefined |Number

});

module.exports= Order = mongoose.model('order',order);