const route2=require('express').Router();

route2.post('/',(req,res)=>{
    res.send('Hello from route2');
});

module.exports=route2;