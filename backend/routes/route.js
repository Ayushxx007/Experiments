const route=require('express').Router();
const User=require('../model/user.js');

route.post('/',(req,res,next)=>{

    const {value}=req.body;

    const user=new User({
        name:value
    });
    
    user.save();


    console.log('Request received at / endpoint');
    next();
   
});

route.get('/api',(req,res)=>{
    res.send('Hello from /api endpoint');
});

module.exports=route;