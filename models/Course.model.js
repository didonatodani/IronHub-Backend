const { Schema, model } = require("mongoose");

const courseSchema = new Schema({
  name: {
    type: String,
    enum: ["Data Analytics", "Web Development, UX/UI Design"],
    required: [true, "Name of the course is required"],
  },
  type: {
    type: String,
    enum: ["Full-time", "Part-time"],
    required: [true, "Type of the course is required"],
  },
  campus: {
    type: String,
    enum: ["Barcelona", "Madrid", "Remote"],
    required: [true, "Campus of the course is required"],
  },
});

const Course = model("Course", courseSchema);

module.exports = Course;