const express = require("express")
const bodyParser = require("body-parser") 
const router = require("./routes/posts.js")
require("dotenv").config()

const app = express()

app.use(bodyParser.json())

// routes 
app.use("/posts", router)
app.get("/", (req, res) => res.send("hello"))


app.listen(process.env.PORT, () => console.log("i am listening on port", process.env.PORT))