const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Define collection and schema for Business
let Student = new Schema(
  {
    student_name: {
      type: String,
      required: true
    },
    student_id_number: {
      type: Number,
      required: true
    },
    courses: {
      type: JSON
    },
    semester: {
      type: Number
    },
    active: {
      type: Boolean,
      required: true
    }
  },
  {
    collection: "students"
  }
);
module.exports = mongoose.model("Student", Student);
