const express=require('express')
const app=express();
const data=[];
const axios=require("axios")


 function getData(){

}
getData()

app.get('/', (req,res)=>{axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
        const myda= res.data
    })
    res.json(myda)
    .catch((err) => console.log(err));

})


app.listen(3001, ()=>{
    console.log("server started on 3001")
})