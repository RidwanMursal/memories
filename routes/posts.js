const express = require("express")
const pool = require("../connection")

const router = express.Router()

// get all posts 
router.get("/", async (req, res) => {
    try {
        const posts = await pool.query(`
            SELECT * FROM posts
        `)
        res.json(posts.rows)
    } catch (error) {
        res.json(error)
    }
})

// get post from an id 
router.get("/:id", async (req, res) => {
    try {
        console.log("this is the id", req.params.id)
        const id = req.params.id
        const post = await pool.query(`
            SELECT * FROM posts WHERE post_id = ($1)
        `, [id])       
        res.json(post.rows) 
    } catch (error) {
        console.log(error)
        res.status(400).json({message: error})
    }
})

router.post("/", async (req, res) => {
    try {
        // //console.log("this is the req", req)
        // console.log("this is the body", req.body)
        const {message, tags, title} = req.body 
        // console.log("these are the tags", tags)
        // console.log("this is the message", message)
        
        const newPost = await pool.query(`
            INSERT INTO posts (message, tags, title)
            VALUES ($1, $2, $3)
            RETURNING * 
        `, [message, tags, title])

        res.json(newPost)
    } catch (error) {
        console.log("this is the error", error)
        res.status(400).json(error) 
    }
})

// delete post by id 
router.delete("/:id", async(req, res) => {
    try {
        const id = req.params.id
        console.log("this is the id", id)
        const deletedPost = await pool.query(`
            DELETE FROM posts WHERE post_id = ($1) RETURNING *
        `, [id])
        res.json(deletedPost.rows)
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
})

module.exports = router