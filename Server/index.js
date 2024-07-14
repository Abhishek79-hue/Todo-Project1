const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const bodyPraser=require("body-parser")
require("dotenv").config()
const app=express()


app.use(cors())
app.use(bodyPraser.json())
app.use(express.urlencoded({extended:false}))

const TodoRouter=require("./Router/todoRouter")
const Port=process.env.Port
const DB_URL=process.env.DB_URL

app.use("/api/todo",TodoRouter)

mongoose.connect(DB_URL).then(app.listen(Port,()=>{
    console.log(`Database Sucessfully Conntected\nServer listen at Port ${Port}`)
})
).catch((error)=>{
    console.log(error.error)
})

