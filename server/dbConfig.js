import mongoose from 'mongoose'
function dbConnect(){
    mongoose.connect(process.env.DB_CONFIG).then(result=>{
        console.log("Database connected")
    }).catch((err)=>{
        console.log("data base error \n"+err)
    })
}
export default dbConnect