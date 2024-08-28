import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import userRoute from "./Router/router.js"
import bodyParser from "body-parser";
import cors from "cors"



const app = express();
app.use(bodyParser.json())
app.use(cors())
dotenv.config();

const PORT = process.env.PORT || 7000
const URL = process.env.MONGOURL

mongoose.connect(URL).then(() => {
  console.log("db is connected successfully")
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

app.use("/user", userRoute)

app.get("/", (req, res) => {
  res.send("It is a curd application")
})
