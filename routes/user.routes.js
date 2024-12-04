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
    const response = await User.findById(userId).populate("posts", "posts");
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
// router.get("/:userId/:postId", async (req, res, next) => {
//   const { userId, postId } = req.params;
//   try {
//     const response = await User.findById(userId);
//     if (response) {
//       res.json(response);
//     } else {
//       res
//         .status(404)
//         .json({ message: "There are no posts on forum, create a new one" });
//     }
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "An error occurred while displaying all the post" });
//   }
// });

module.exports = router