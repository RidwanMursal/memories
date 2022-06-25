console.log("hello worldd")
const express = require("express")
const router = require("./routes/posts.js")
require("dotenv").config()

const app = express()

// routes 
app.use("/posts", router)
app.get("/", (req, res) => res.send("hello"))


app.listen(process.env.PORT, () => console.log("i am listening on port", process.env.PORT))