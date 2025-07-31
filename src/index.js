import dotenv from 'dotenv'
import connectDB from './db/index.js'
import express from 'express'
import {app} from './app.js'
dotenv.config({path:'./env'})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server started at port: ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MongoDB connection failed",err);
})





// import express from 'express'
// const app=express();
// (async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on('error',(err)=>{
//             console.log(err);
//             throw err;
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`The server is listening on ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("ERROR:",error);
//         throw error;
//     }
// })()