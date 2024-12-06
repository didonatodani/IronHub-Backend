const express = require("express");
const router = express.Router();
const Post = require("../models/Post.model");
const Reply = require("../models/Reply.model");

/*Post a reply for a post ID*/
router.post("/:postId/reply/", async (req, res, next) => {
  const { postId } = req.params;

  const { name, description, created, picture, link, likes } = req.body;

  const newReply = {
    name,
    description,
    created,
    link,
    picture,
    likes,
  };

  try {
    const createdReply = await Reply.create(newReply);
    const updatePost = await Post.findByIdAndUpdate(
      postId,
      { $push: { replies: createdReply._id } },
      { new: true }
    );

    if (updatePost) {
      res.json({ message: "Reply added successfully", reply: createdReply });
    } else {
      res.status(404).json({ message: "Post not found" });
    }

    if (createdReply) {
      res.json(createdReply);
    } else {
      res
        .status(404)
        .json({ message: "There are no replies on forum, create a new one" });
    }
  } catch (error) {
    console.log(error);

    res
      .status(500)
      .json({ message: "An error occurred while creating a reply" });
  }
});

/*Get the reply */

router.get("/:postId/reply/:replyId", async (req, res, next) => {
  const { replyId } = req.params;
  try {
    const response = await Reply.findById(replyId);
    res.json(response);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "An error occurred while getting your reply" });
  }
});

/*Update a reply */
router.put("/:postId/reply/:replyId", async (req, res, next) => {
  const { postId, replyId } = req.params;
  const { description, created, picture, link, likes } = req.body;

  const putReply = {
    description,
    created,
    link,
    picture,
    likes,
  };

  try {
    // Update the reply
    const updatedReply = await Reply.findByIdAndUpdate(replyId, putReply, {
      new: true,
    });
    if (updatedReply) {
      res.json(updatedReply);
    } else {
      res
        .status(404)
        .json({ message: "There are no replies on forum, create a new one" });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "An error occurred while updating your reply" });
  }
});

/*Delete the reply */

router.delete("/:postId/reply/:replyId", async (req, res, next) => {
  const { replyId } = req.params;
  try {
    const response = await Reply.findByIdAndDelete(replyId);
    res.json(response);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "An error occurred while deleting your reply" });
  }
});

module.exports = router;
