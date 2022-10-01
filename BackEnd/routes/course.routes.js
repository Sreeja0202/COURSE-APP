const express = require("express");
const router = express.Router();
const objectId = require("mongoose").Types.ObjectId;

const Course = require("../model/course.model.js");

// GET by id/salary/name

router.get("/:id", (req, res) => {
  if (objectId.isValid(req.params.id)) {
    Course.findById(req.params.id, (err, doc) => {
      if (err) {
        console.log("Error in getting data by id", +err);
      } else {
        res.send(doc);
      }
    });
  } else {
    return res
      .status(400)
      .send(`No record found with Course with id ${req.params.id}`);
  }
});

// GET
router.get("/", (req, res) => {
  Course.find((err, doc) => {
    if (err) {
      console.log("Error in getting data", +err);
    } else {
      res.send(doc);
    }
  });
});

// POST
router.post("/", (req, res) => {
  let cou = new Course({
    cname: req.body.cname,
    cduration: req.body.cduration,
    cvenue: req.body.cvenue,
  });
  cou.save((err, doc) => {
    if (err) {
      console.log("Error in Posting Data", +err);
    } else {
      res.send(doc);
    }
  });
});

// UPDATE by id/salary/name

router.put("/:id", (req, res) => {
  if (objectId.isValid(req.params.id)) {
    let cou = {
      cname: req.body.cname,
      cduration: req.body.cduration,
      cvenue: req.body.cvenue,
    };
    Course.findByIdAndUpdate(
      req.params.id,
      { $set: cou },
      { new: true },
      (err, doc) => {
        if (err) {
          console.log("Error in updating data by salary", +err);
        } else {
          res.send(doc);
        }
      }
    );
  } else {
    return res
      .status(400)
      .send(`No record found with Course with id ${req.params.id}`);
  }
});

// DELETE by id/salary/name

router.delete("/:id", (req, res) => {
  if (objectId.isValid(req.params.id)) {
    Course.findByIdAndRemove(req.params.id, (err, doc) => {
      if (err) {
        console.log("Error in Deleting data by id", +err);
      } else {
        res.send(doc);
      }
    });
  } else {
    return res
      .status(400)
      .send(`No record found with Course with id ${req.params.id}`);
  }
});

module.exports = router;
