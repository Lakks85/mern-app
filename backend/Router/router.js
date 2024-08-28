import express from "express"
import { createUser, getAllUser, getSingleUser, updateUser, userDelete } from "../Controller/User.controller.js"



const route = express.Router()
route.post("/create", createUser)
route.get("/getalluser", getAllUser)
route.get("/singleuser/:id", getSingleUser)
route.put("/update/:id", updateUser)
route.delete("/delete/:id", userDelete)

export default route
