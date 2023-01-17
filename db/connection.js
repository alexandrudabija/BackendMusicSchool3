const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const URI = "mongodb+srv://alex:alex@schoolmusic.1jd1pkh.mongodb.net/SchoolMusic";
const connectDB = async()=>
{

mongoose.connect(URI);
await mongoose.connect(URI);
console.log('db connected ... !');
}


module.exports = connectDB;