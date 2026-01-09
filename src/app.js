import express from "express"
import cors from "cors";
import cookieParser from "cookie-parser";

const app=express()
app.use(cors({ // cors is like make acces between fronted and backend 
    origin: process.env.CORS_ORIGIN,
    credentials: true // it allow session tokens to be shared between frontend ↔ backend.


}))
app.use(express.json({limit:"16kb"})) // because sever doesnt crash when data came in json sop it set limit “Request ke body ko JSON me convert kar do before controller”
app.use(express.urlencoded({extended:true ,limit:"16kb"}))
app.use(express.static("public")) // koi bi files wagerah store kar sakte h
app.use(cookieParser()) //user ke browser ke cookie(data) ko access krna “Cookies read kar lo before request reaches route”


// routes import
import userRouter from "./routes/user.routes.js";

// routes declaration
app.use("/api/v1/users", userRouter);

// http://localhost:8000/api/v1/users/register

export { app };












