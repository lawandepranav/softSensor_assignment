const express=require('express')
const app=express();
const data=[];
const axios=require("axios")



app.get('/', (req,res)=>{
    const data = fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>console.log(json))
  
res.json(data)
})


app.listen(3001, ()=>{
    console.log("server started on 3001")
})