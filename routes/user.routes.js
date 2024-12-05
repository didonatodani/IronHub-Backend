const express = require("express");
const router = express.Router();
const Post = require("../models/Post.model");
const User = require("../models/User.model");


/*Get a user */
router.get("/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const response = await User.findById(userId);
    if(response) {
      res.json(response)
      console.log(response.posts);
    } else {
      res.status(404).json({ message: "No user found with this id"});
    }
  } catch (error) {
    res
      .status(500)
      .json( { message: "An error occured while searching for the user"})
  }
});

/*Put a user */
router.put("/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const response = await User.findByIdAndUpdate(userId, req.body, { new: true });
    if(response) {
      res.json(response)


    } else {
      res.status(404).json({ message: "No user found with this id"});
    }
  } catch (error) {
    res
    .status(500)
    .json( { message: "An error occured while searching for the user"})
  }
});


/*Get posts from user */
router.get("/:userId/posts", async (req, res) => {
  const { userId } = req.params;

  try {
    const response = await User.findById(userId).populate("posts", "title");
    if(response) {
      res.json(response)
    } else {
      res.status(404).json({ message: "No user found with this id"});
    }
  } catch (error) {
    res
      .status(500)
      .json( { message: "An error occured while searching for the user"})
  }
});


module.exports = router