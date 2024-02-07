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