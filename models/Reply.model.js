const { Schema, model } = require("mongoose");

const replySchema = new Schema({
  name: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Username is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  created: {
    type: Date,
    default: Date.now,
  },
  picture: {
    type: String,
  },
  likes: {
    type: Number,
  },
});

const Reply = model("Reply", replySchema);

module.exports = Reply;