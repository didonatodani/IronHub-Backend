const express = require("express");
const router = express.Router();
const Post = require("../models/Post.model");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

module.exports = router;

router.post("/", async (req, res, next) => {
  const { name, title, description, link, picture, likes, created } = req.body;

  const newPost = {
    name,
    title,
    description,
    link,
    picture,
    likes,
    created,
  };

  try {
    const response = await Post.create(newPost);
    res.json(response)
  } catch (error) {
    console.log("Error creating a post: ", error);
  }
});
