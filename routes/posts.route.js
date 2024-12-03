const express = require("express");
const router = express.Router();
const Post = require("../models/Post.model");

/*Get all post */
router.get("/", async (req, res, next) => {
  try {
    const response = await Post.find();
    if (response) {
      res.json(response);
    } else {
      res
        .status(404)
        .json({ message: "There are no posts on forum, create a new one" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while displaying all the post" });
  }
});

/*Create a post */
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
    if (response) {
      res.json(response);
    } else {
      res
        .status(404)
        .json({ message: "There are no posts on forum, create a new one" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while creating a the post" });
  }
});

/*Get a post by search params*/

router.get("/search", async (req, res) => {
  const { title } = req.query;

  try {
    const response = await Post.findOne({
      title: { $regex: title, $options: "i" },
    });

    if (response) {
      res.json(response);
    } else {
      res.status(404).json({ message: "No post found with the given title" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while searching for the post" });
  }
});

/*Get a post by title using search params */
router.get("/:postId", async (req, res, next) => {
  const { postId } = req.params;

  try {
    const response = await Post.findById(postId);
    if (response) {
      res.json(response);
    } else {
      res.status(404).json({ message: "No post found with this ID" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while searching for the post" });
  }
});




module.exports = router;
