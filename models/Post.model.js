const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  name: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Username is required"],
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: "Course",
    required: [true, "Course is required"],
  },
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  link: {
    type: String,
  },
  picture: {
    type: String,
  },
  likes: {
    type: Number,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

const Post = model("Post", postSchema);

module.exports = Post;
