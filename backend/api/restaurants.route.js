import express from "express"

const router = express.Router() // Give access to Express Router
router.route("/").get((req, res) => res.send("Hello World")) // Demo Route

export default router