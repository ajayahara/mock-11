const express=require("express");
const cors=require("cors");
const jwt=require("jsonwebtoken");
const { connection } = require("./config/db.js");
const app=express()
app.use(cors());
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("You Are In Home Page")
})
app.listen(process.env.KEY,async ()=>{
    try {
        await connection
        console.log("Connected to db")
    } catch (error) {
        console.log(error)
    }
})