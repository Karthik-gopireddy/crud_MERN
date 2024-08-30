const express=require("express")
const dotEnv=require("dotenv")
const mangoose=require("mongoose")
const bodyParser=require("body-parser")
const employeeRoutes=require("./routes/employeeRoutes")

const app=express()

app.use(bodyParser.json())

const PORT=process.env.PORT || 5000

dotEnv.config()

mangoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("successfully connected to mongoDB")
})
.catch((error)=>{
    console.log("Error:",error)
})




app.use("/employees",employeeRoutes)





app.listen(PORT,()=>{
    console.log(`server connected and running on ${PORT}`)
})

