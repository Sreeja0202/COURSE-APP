const express = require("express");
const cors = require("cors");
const courseData = require("./model/coursedata.model.js");

const app = new express();
app.use(cors());
app.use(express.json());

app.post("/addcourse", function (req, res) {
  var item = {
    title: req.body.title,
    desc: req.body.desc,
    date: req.body.date,
    venue: req.body.venue,
    duration: req.body.duration,
  };

  var data = courseData(item);
  data.save(item);
  courseData.find().then(function (data) {
    res.send(data);
  });
});

app.listen(3000, () => {
  console.log("Server started @ Port 3000");
});
