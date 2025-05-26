
import { myPosts } from "../data.js";

const index = (req, res) => {
    res.json({
        data : myPosts,
    })
}
const show = (req, res) => {
    const postId = req.params.id;
  const post = myPosts.find(curPost => curPost.id === parseInt(postId))
    res.json({
        data : post,
    })
}
const destroy =(req, res) => {
     const postId = req.params.id;
  
  const post = myPosts.filter(curPost => curPost.id !== parseInt(postId))
   console.log(post);
   
    res.sendStatus(204) }

    const postController = {
        index,
        show,
        destroy
    }
    export default postController;