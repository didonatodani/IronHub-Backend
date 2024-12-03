const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in thisk case
const userSchema = new Schema(
  {
    picture: {
      type: String,
      default:
        "https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2247726673.jpg",
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
    name: {
      type: String,
      required: [true, "Name is required."],
    },
    linkedin: {
      type: String,
    },
    course: {
      type: mongoose.Schema.Types.CourseId,
      ref: "Course",
      required: [true, "Course is required"],
    },
    languages: {
      type: String,
    },
    posts: {
      type: mongoose.Schema.Types.PostId,
      ref: "Post",
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
