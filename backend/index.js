const express = require("express");
const cors = require("cors")
const dotenv = require("dotenv");
dotenv.config();

const { connection } = require("./Config/db");
const app = express()
 

app.use(express.json()) 
app.use(cors())


//server runnig on port 8080
app.listen(process.env.PORT, async () => {
    try {
        await connection
        console.log( "Connected to MongoDb")

    } catch (error) {
        console.log("Cannot connect to MongoDb")
    }
    console.log(`Server running on port ${process.env.PORT}`)
})