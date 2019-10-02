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
    courses: [{
      subject_name: {
        type: String
      },
      grade: {
        type: Number
      }
    }]
  },
  {
    collection: "students"
  }
);
module.exports = mongoose.model("Student", Student);
