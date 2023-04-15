require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT;
const cookieParser = require("cookie-parser");
const DefaultData = require("./defaultdata");
require("./db/conn");
const router = require("./routes/router");
const Products = require("./models/productSchema");
const jwt = require("jsonwebtoken");
const path=require("path")
app.use(express.static(path.join(__dirname,'../home/build')))
app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'../home/build/index.html'))
})
// middleware
app.use(express.json());
app.use(cookieParser(""));

app.use(router);
// app.get("/",(req,res)=>{
//     res.send("your server is running");
// });


if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
}

app.listen(port,()=>{
    console.log(`your server is running on port ${port} `);
});

DefaultData();