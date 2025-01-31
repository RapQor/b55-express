import express from "express";
import dotenv from "dotenv";
import PostRoute from "./src/routes/PostRoute";

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

const post = new PostRoute();

app.use(post.router);

app.get("/", (req: express.Request, res: express.Response) => {
    res.send("Hello World!, coba2");
});

app.listen(port, () => {
    console.log(`Server berjalan pada port ${port}`);
})