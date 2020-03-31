const mongoose = require('mongoose');

const tchAttendanceSchema = new mongoose.Schema({
    recId: String,
    date: {type : Date, default: new Date()},
    teachers: { tchId: String,
                tchName: String,
                status: {type: Number, default: 1}}
})

module.exports = mongoose.model( 'teachAttendance', 'tchAttendanceSchema');