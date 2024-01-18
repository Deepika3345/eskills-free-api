const express = require("express")
const { connectDB } = require("./config/db_config")
const { generateotp } = require("./controllers/otpController")
require('dotenv').config()
const app = express()
const PORT = process.env.PORT

// connect DB

connectDB()


// Body Parser
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get("/" , (req,res)=>{
    res.json({
        msg : "WELCOME TO ESKILLS API'S"
    })
})



app.use("/api/otp",generateotp)
app.use('/api/todos', require('./routes/todoRoutes'))




app.listen(PORT, () => {
    console.log(`server is running at : ${PORT}`)
})