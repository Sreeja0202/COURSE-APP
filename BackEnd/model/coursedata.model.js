const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://sreejamohan444:TXRgxw7Po2lYeugH@cluster0.mwlsecd.mongodb.net/CourseDB", err=>
{
    if(!err)
    {
        console.log('DB connection successfull!!!');
    }
    else
    {
        console.log('Error in connection', +err);
    }
});
const courseschema = mongoose.Schema({
    title: String,
    desc: String,
    date: String,
    venue: String,
    duration: String
})

var courseData = mongoose.model('courseset', courseschema);

module.exports = courseData;

