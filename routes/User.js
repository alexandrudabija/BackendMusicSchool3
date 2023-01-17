const express = require('express');
const mongoose = require('mongoose');
const User = require('../model/User');
const  route = express.Router();
const ObjectId= require('mongoose').Types.ObjectId;





// route.get('/email',async(req,res)=>{
                 
                        
//   try{
// const email = req.body.email;
//  const productData= await User.find({"email":{$regex:".*"+email+".*"}})
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
      





route.post('/',async (req,res)=>{
            
                const user = new User(
                    {
                      idUser: req.body.idUser,
                      email: req.body.email,
                      firstname: req.body.firstname,
                      lastname: req.body.lastname,
                      country :req.body.country,
                      age:req.body.age,
                      password:req.body.password,
                      dateRegistration :req.body.dateRegistration,
                      orders:req.body.orders
                    }
                )

          try {

                const UserModel = await user.save();
              res.json(UserModel)


          }catch (error)
          {
            res.send(`some error occured => ${error}}`)



          }
                


            })


            route.get('/',async(req,res)=>{

                try{
    
                const user= await User.find()
                res.status(200).json(user)
                }
                catch (error)
                {
    
                res.send(`some error occured => ${error}}`)
                }
    
                })


                route.get('/:id',async(req,res)=>{

         
       
 if (!ObjectId.isValid(req.params.id))
 return res.status(400).send(`No record with give id L ${req.params.id}`);

 const id = await  User.findById(req.params.id);
 res.json(id)
                  }) 


route.delete('/:id',async(req,res)=>{
                    
 const deleteOne = await     User.remove({_id:req.params.id})

res.json(deleteOne);
 })

//  route.put('/update/:id', async(req,res,next)
route.put('/:id', async(req,res,next)=>{


try {

await User.findByIdAndUpdate(  {_id:req.params.id  },
    
  {
     $set:{
      
        idUser: req.body.idUser,
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        country :req.body.country,
        age:req.body.age,
        password:req.body.password,
        dateRegistration :req.body.dateRegistration,
        orders:req.body.orders
     
    }
 
  }

   


  
  )
  res.end("Success");

}catch (err)
{
  res.send(err);
}

})


module.exports=route;