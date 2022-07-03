import mongoose from 'mongoose'
function dbConnect(){
    mongoose.connect("mongodb://localhost:27017/MernAuth").then(result=>{
        console.log("Database connected")
    }).catch((err)=>{
        console.log("data base error \n"+err)
    })
}
export default dbConnect