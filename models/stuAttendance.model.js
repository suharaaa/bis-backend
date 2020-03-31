const mongoose = require('mongoose');

const stuAttendanceSchema = new mongoose.Schema({
    id: String,
    stuId: String,
    date: {type : Date, default: new Date()},
    status : {type: Number, default: 1}
})

module.exports = mongoose.model('stuAttendance', stuAttendanceSchema);