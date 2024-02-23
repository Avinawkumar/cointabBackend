const express = require("express");
const cors = require("cors");
const { connection } = require("./configs/db");
const { usersRoute } = require("./routes/usersRoute");
const { postsRoute } = require("./routes/postsRoute");


require('dotenv').config();

const app =  express()

app.use(express.json());
app.use(cors())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
// Basic routes
app.get("/",(req,res)=>{
    res.send("hello from cointab assigntment backend!");
})

// Routes
app.use("/user" , usersRoute)
app.use("/post", postsRoute)

app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("connected to MongoDBAtlas server")
    }
    catch(err){
        console.log("error connecting to MongoDBAtlas server")
        console.log(err)
    }
    console.log(`server is running on port ${process.env.port}`)
  
})


