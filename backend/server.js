// Configure an Express Server
import express from "express"
import cors from "cors"
import restaurants from "./api/restaurants.route.js"

 const app = express()

 // Apply Middleware
 app.use(cors())
 app.use(express.json())

 //  Specify Initial Routes
 app.use("/api/v1/restaurants", restaurants)
 app.use("*", (req, res) => res.status(404).json({ error: "not found"})) // 404 if different route

 // Export app as module
 export default app