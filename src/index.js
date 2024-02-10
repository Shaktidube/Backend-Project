// require('dotenv').config({path:'./env'})
// import mongoose from "mongoose";
// import connectDB from "./db/index.db";
// -------------------------------------------------

import dotenv from "dotenv"
import connectDB from "./db/index.db.js"

dotenv.config({
    path:'./env'
})

connectDB()

.then(()=>{
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`server is running at ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("MongoDb connection failed",error);
})