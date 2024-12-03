const express = require("express");
const router = express.Router();
const Post = require("../models/Post.model");

router.get("/", async (req, res, next) => {
  try {
    const response = await Post.find()
    res.json(response)
  } catch (error) {
    console.log("Error creating a post: ", error);
  }
});


router.post("/", async (req, res, next) => {
  const { name, course, title, description, link, picture, likes } = req.body;

  const newPost = {
    name,
    course,
    title,
    description,
    link,
    picture,
    likes,
};

try {
    const response = await Post.create(newPost);
    res.json(response)
  } catch (error) {
    console.log("Error creating a post: ", error);
  }
});



module.exports = router;