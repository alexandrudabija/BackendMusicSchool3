const express = require('express');
const mongoose = require('mongoose');
const Order = require('../model/Order');
const  route = express.Router();
const ObjectId= require('mongoose').Types.ObjectId;


route.post('/',async (req,res)=>{
            
                const order = new Order(
                    {
                        idUser: req.body.idUser,
                        email: req.body.email,
                        firstname: req.body.firstname,
                        lastname: req.body.lastname,
                        country: req.body.country,
                        street: req.body.street,
                        zipcode: req.body.zipcode,
                        city: req.body.city,
                        card: req.body.card,
                        ll_aa: req.body.ll_aa,
                        cvc: req.body.cvc,
                        idOrder:  req.body.idOrder,
                        items : req.body.items,
                        Total :req.body.Total,
                       currency : req.body.currency,
                       dateOrder:req.body.dateOrder

                    }
                )

          try {

                const orderModel = await order.save();
              res.json(orderModel)


          }catch (error)
          {
            res.send(`some error occured => ${error}}`)



          }
                


            })


            route.get('/',async(req,res)=>{

                try{
    
                const order= await Order.find()
                res.status(200).json(order)
                }
                catch (error)
                {
    
                res.send(`some error occured => ${error}}`)
                }
    
                })



//                 route.get('/search',async(req,res)=>{
                 
                        
//   try{
// const search = req.body.search;
//  const productData= await Order.find({"cvc":{$regex:".*"+search+".*"}})
//  if(productData.length>0) {

//   res.status(200).send({success:true,msg:"Products Details",data:productData})

//  }
// else{
// res.status(200).send({success:true,msg:"Products not found"})

// }

//   }
//   catch(error)
//   {

// res.status(400).send({success:false,msg:error.message})

//   }



//                 })
      
                 
             
      


                route.get('/:id',async(req,res)=>{

      
       
 if (!ObjectId.isValid(req.params.id))
 return res.status(400).send(`No record with give id L ${req.params.id}`);

 const id = await  Order.findById(req.params.id);
 res.json(id)
                  }) 


                  route.delete('/:id',async(req,res)=>{
                    
               const deleteOne = await     Order.remove({_id:req.params.id})

                       res.json(deleteOne);
                  })


route.put('/:id', async(req,res)=>{
console.log(req.params.id);
try {

 await Order.findByIdAndUpdate(  {_id:req.params.id  },
    
  {
     $set:{
      
       idUser: req.body.idUser,
      email: req.body.email,
    firstname: req.body.firstname,
   lastname: req.body.lastname,
     country: req.body.country,
    street: req.body.street,
     cvc: req.body.cvc,
  city: req.body.city,
   card: req.body.card,
  ll_aa: req.body.ll_aa,
   cvc: req.body.cvc,
   idOrder: req.body.idOrder,
    items: req.body.items,
   Total: req.body.Total,
    currency: req.body.currency,
    dateOrder:req.body.dateOrder
    
    }
 
  }

   


  
  );
res.send("Success")

}catch (err)
{
  res.send(err);
}

//
})


module.exports=route;