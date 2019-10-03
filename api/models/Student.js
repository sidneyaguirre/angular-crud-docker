const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Define collection and schema for Business
let Student = new Schema(
  {
    student_name: {
      type: String
    },
    student_id_number: {
      type: Number
    },
    courses: {
      type: JSON
    }
  },
  {
    collection: "students"
  }
);
module.exports = mongoose.model("Student", Student);
