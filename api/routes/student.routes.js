const express = require("express");
const app = express();
const studentRoutes = express.Router();
// Require Student model in our routes module
let Student = require("../models/Student");

// Defined store route to save one document
studentRoutes.route("/add").post(function(req, res) {
  let student = new Student();
  student.student_name = req.body.student_name;
  student.student_id_number = req.body.student_id_number;
  student.courses = req.body.courses;
  student
    .save()
    .then(student => {
      res.status(200).json({ student: "student added successfully" });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});
// Defined get data(index or listing) route to list all documents
studentRoutes.route("/").get(function(req, res) {
  Student.find(function(err, students) {
    if (err) {
      console.log(err);
    } else {
      res.json(students);
    }
  });
});
// Defined edit route to edit one Document
studentRoutes.route("/edit/:id").get(function(req, res) {
  let id = req.params.id;
  Student.findById(id, function(err, student) {
    res.json(student);
  });
});
// Defined get route to get one Document. the id uses the student_id_number
studentRoutes.route("/get/:id").get(function(req, res) {
  let id = req.params.id;
  Student.find({ student_id_number: Number(id) }).exec((err, student) => {
    if (err) {
      console.log(err);
    } else {
      res.json(student);
    }
  });
});
// Defined update route to update one Document
studentRoutes.route("/update/:id").post(function(req, res) {
  Student.findById(req.params.id, function(err, next, student) {
    if (!student) return next(new Error("Could not load Document"));
    else {
      student.student_name = req.body.student_name;
      student.student_id_number = req.body.student_id_number;
      student.courses = req.body.courses;
      student
        .save()
        .then(student => {
          res.json("Update completed");
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});
// Defined update route to update all Documents
studentRoutes.route("/update/?=q").post(function(req, res) {
  var query = req.query.q;
  Student.updateMany(query, function(err, next, student) {
    if (!student) return next(new Error("Could not load Document"));
    else {
      student.student_name = req.body.student_name;
      student.student_id_number = req.body.student_id_number;
      student.courses = req.body.courses;
      student
        .save()
        .then(student => {
          res.json("Update completed");
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});
// Defined delete | remove | destroy route
studentRoutes.route("/delete/:id").get(function(req, res) {
  Student.findByIdAndRemove({ _id: req.params.id }, function(err, student) {
    if (err) res.json(err);
    else res.json("Successfully removed");
  });
});
// Defined mean grade of a course route
studentRoutes.route("/mean/:course").get(function(req, res) {
  let course = req.params.course;
  let filter = `{"courses.${course}": { "$gte": 0 }}`;
  let projection = `"courses.${course}"`

  filter = JSON.parse(filter);
  projection = JSON.parse(projection);
  
  Student.find(filter, projection).exec((err, student) => {
    if (err) {
      res.json(err);
    } else {
      let grades = 0;
      for (let i = 0; i < student.length; i++) {
        grades += student[i].courses[course];
    }  
      var mean = grades/student.length;
      console.log(mean);
      res.json(mean);
  }});
});

module.exports = studentRoutes;
