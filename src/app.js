require("dotenv").config()
const express= require("express")
const { default: mongoose } = require("mongoose")
const app = express()
const mangoose= require("mongoose")

const { UserRouter } = require("./Routes/User.routes")
const cp= require("cookie-parser")
const { BlogRouter } = require("./Routes/Blog.routes")



app.use(express.json())
app.use(cp())
app.use("/api/users", UserRouter)
app.use("/api/blogs", BlogRouter)


mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Db connected")
})

app.listen(8080,()=>{
    console.log("server running")
})
