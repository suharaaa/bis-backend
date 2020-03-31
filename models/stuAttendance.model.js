const mongoose = require('mongoose');

const stuAttendanceSchema = new mongoose.Schema({
    Rid: String,
    date: {type : Date, default: new Date()},
    class: String,
    students: { stuId: String, 
                stuName: String, 
                status: {type: Number, default: 1}},
    presentedStudentsCount: Number
})

module.exports = mongoose.model('stuAttendance', stuAttendanceSchema);