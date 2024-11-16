import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  updatePost,
} from "../controller/postController.js";

const router = express.Router();

router.post("/create", createPost);

router.get("/fetch", getPost);

router.put("/update", updatePost);

router.delete("/delete", deletePost);

export default router;
