import express from "express";
import { myPosts } from "../data.js";
const router = express.Router();

// INDEX
router.get("/", (req, res) => {
    res.json({
        data : myPosts,
    })
})
// SHOW
router.get("/:id", (req, res) => {
    const postId = req.params.id;
  const post = myPosts.find(curPost => curPost.id === parseInt(postId))
    res.json({
        data : post,
    })
})
// // STORE
// router.get("/", (req, res) => {
//     res.json({
        
//     })
// })
// // UPDATE
// router.get("/:id", (req, res) => {
//     res.json({
        
//     })
// })
// // DESTROY
router.delete("/:id", (req, res) => {
     const postId = req.params.id;
  const post = myPosts.filter(curPost => curPost.id !== parseInt(postId))
    res.json({
        data : post,
    })
})
export default router;