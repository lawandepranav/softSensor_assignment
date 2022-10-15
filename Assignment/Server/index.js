const express= require('express')
const axios=require('axios')
const app=express()





app.get('/',function(req,res){
    res.json('hellow')
})
app.listen(8080,()=> console.log('server running on port 8080'))