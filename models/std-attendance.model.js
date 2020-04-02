const mongoose = require('mongoose');

const stdAttendanceSchema = new mongoose.Schema({
    date : { type: Date, default: new Date()},
    class: { type: Schema.Types.ObjectId, ref: 'class'},
    records: [
        {
            student: { type: Schema.Types.ObjectId, ref: 'student'},
            isPresent: { type: Boolean, default: false }
        }
    ],
    count: {type:Number}
},{ timestamps: true });

module.exports = mongoose.model('stdAattendance', stdAttendanceSchema);