import express from "express"
import cors from "cors";
import cookieParser from "cookie-parser";

const app=express()
app.use(cors({ // cors is like make acces between fronted and backend 
    origin: process.env.CORS_ORIGIN,
    credentials: true // it allow session tokens to be shared between frontend ↔ backend.


}))
app.use(express.json({limit:"16kb"})) // because sever doesnt crash when data came in json sop it set limit 
app.use(express.urlencoded({extended:true ,limit:"16kb"}))
app.use(express.static("public")) // koi bi files wagerah store kar sakte h
app.use(cookieParser()) //user ke browser ke cookie(data) ko access krna
export{app}