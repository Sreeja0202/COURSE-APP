const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://sreejamohan444:cluster0@cluster0.mwlsecd.mongodb.net/Employeedb",
  (err) => {
    if (!err) {
      console.log("DB Connection established!!!");
    } else {
      console.log("Error in Connection", +err);
    }
  }
);

module.exports = mongoose;
