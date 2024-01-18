const mongoose = require("mongoose")
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("DB connected successfully:", conn.connection.host)

    } catch (error) {
        console.log("Error in DB connection")

    }
}
module.exports = { connectDB }