console.log("hello worldd")
const express = require("express")
const router = require("./routes/posts.js")

const app = express()

// routes 
app.use("/posts", router)
app.get("/", (req, res) => res.send("hello"))


app.listen(5050, () => console.log("i am listening"))