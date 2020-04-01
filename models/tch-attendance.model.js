const mongoose = require('mongoose');

const tchAttendanceSchema = new mongoose.Schema({
    "date": {type: Date, default : new Date()},
    "count": {type: Number},
    "records": [{ 
        "tchId": {type: String},
        "tchName": {type: String},
        "status": {type: Number, default: 0}
    }],
    "updatedOn": {type: Date, default : new Date()}  
});

module.exports = mongoose.model('tchattendance', tchAttendanceSchema);