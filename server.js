 const express = require('express');
const connectDB = require('./db/connection');
const app =  express();
const Order = require('./model/Order');
const User = require('./model/User');
app.use(express.urlencoded({extended:true}))
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());

connectDB();
app.use(express.json({extended:false}))

app.use('/Orders',require('./routes/Order'));
app.use('/Users',require('./routes/User'));
app.use('/Products',require('./routes/Porduct'));


// user with email !

app.get("/email/:key",async (req,res)=>{


  try{
const empty=[]
 const productData= await User.find({"email":{$regex:".*"+req.params.key+".*"}})
 if(productData.length>0) {

  res.status(200).send({success:true,msg:"User Details",data:productData})

 }
else{
res.status(200).send({success:true,msg:"User not found",data:empty})

}

  }
  catch(error)
  {

res.status(400).send({success:false,msg:error.message})

  }


})


// orders by idUser
app.get("/userOrders/:key",async (req,res)=>{


    try{
  const empty=[]
   const productData= await Order.find({"idUser":{$regex:".*"+req.params.key+".*"}})
   if(productData.length>0) {
  
    res.status(200).send({success:true,msg:"Order Details",data:productData})
  
   }
  else{
  res.status(200).send({success:true,msg:"Order not found",data:empty})
  
  }
  
    }
    catch(error)
    {
  
  res.status(400).send({success:false,msg:error.message})
  
    }
  
  
  })




const Port = process.env.Port || 3000;



app.listen(Port, ()=> console.log("Server started"));