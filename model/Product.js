const mongoose = require('mongoose');

const product = new mongoose.Schema({
   
    idProduct: Number,
      nameProduct: String,
      brandProduct: String,
      priceProduct: Number,
      imgProduct: String,
      quantityProduct: Number,
      stockProduct:Number,
      

});




module.exports= Product = mongoose.model('product',product);