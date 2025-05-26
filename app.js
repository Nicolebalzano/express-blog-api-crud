import express from "express";
import postsRouter from "./routers/posts.js";
const app = express();
const port = 3000; 

app.use(express.static("public"));
app.get("/", (req, res) => {
    console.log("Benvenuti nelle API dei posts")
})

app.use("/posts", postsRouter);
app.listen(port, () => {
    console.log("Server in ascolto")
})