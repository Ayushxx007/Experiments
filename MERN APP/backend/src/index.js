const express=require('express');
const cors=require('cors');
const app=express();
 require("dotenv").config();
const route=require('../routes/route.js');
const route2=require('../routes/route2.js');
const connect=require('../db.js/db.js');
//c
app.use(express.json());//
   
app.use(cors());

app.listen(process.env.port,()=>{
    console.log(`Server is running on port ${process.env.port}`);
    connect();

});



app.use('/',route,route2);


