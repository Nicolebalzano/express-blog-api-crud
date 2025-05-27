import express from "express";
import { myPosts } from "../data.js";
import postController from "../controllers/post.js"
const router = express.Router();
// INDEX
router.get("/", postController.index);
// SHOW
router.get("/:id",  postController.show)
// STORE
router.post("/", postController.store)
// // UPDATE
// router.get("/:id", (req, res) => {
//     res.json({
        
//     })
// })
// // DESTROY
router.delete("/:id",  postController.destroy)
export default router;