import express from "express";
import { myPosts } from "../data.js";
import postController from "../controllers/post.js"
const router = express.Router();
// INDEX
router.get("/", postController.index);
// SHOW
router.get("/:id",  postController.show)
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
router.delete("/:id",  postController.destroy)
export default router;