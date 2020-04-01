const mongoose = require('mongoose');

const stdAttendanceSchema = new mongoose.Schema({
    "classId": {type: String },
    "date": {type: Date, default : new Date()},
    "count": {type: Number},
    "records": [{
        "sId": {type: String},
        "sName": {type: String},
        "status": {type: Number, default : 0}
    }],
    "updatedOn": {type: Date, default : new Date()}
});

module.exports = mongoose.model('stdattendance', stdAttendanceSchema);