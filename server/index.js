import express from 'express'
import cors from 'cors'
import dbConnect from "./dbConfig.js"
import { UserLogin, UserRegister } from './controllers/userController.js';


const app=express();
app.use(cors())
app.use(express.json())
dbConnect();

app.get('/',(req, res)=>{res.send("welcome")})


app.post('/register',UserRegister)
app.post('/login',UserLogin)



app.listen(5000, ()=>{
    console.log("server running on port 5000")
})