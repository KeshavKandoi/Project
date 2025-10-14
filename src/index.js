
/*import mongoose from "mongoose";
import {DB_NAME} from "/.constants"; */

import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from './app.js'


dotenv.config({
  path: './env'
})
 

connectDB()//ye connect db ek error bhi deta h 
.then( () => {

  app.listen(process.env.PORT || 8000, () =>{
    console.log(` server is running at port :${process.env.PORT}`);
  })
})
.catch((err) =>{
console .log("mongo db connection failed !!!",err);
})


//1st approach
/*
import express from "express"
const app=express()

( async () =>{
  try{
   await mongoose.connect(`${process.env.MONGDB_URI}/${DB_NAME}`)
   app.on("error",(error) => {
    console.log("Error",error);
    throw err;
   })
   app.listen(process.env.PORT,()=>{
    console.log(`App is listening on port ${process.env.PORT}`);
   })
  }
  catch(error){
    console.error("Error",error)
    throw err
  }
})()


*/