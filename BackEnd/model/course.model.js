const mongoose = require("mongoose");
const Course = mongoose.model("Course", {
  cname: {
    type: String,
  },
  cduration: {
    type: String,
  },
  cvenue: {
    type: String,
  },
});

module.exports = Course;
