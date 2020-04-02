const mongoose = require('mongoose');

const stdAttendanceSchema = new mongoose.Schema({
    date : { type: Date, default: new Date()},
    class: { type: Schema.Types.ObjectId, ref: 'Class'},
    records: [
        {
            student: { type: Schema.Types.ObjectId, ref: 'Student'},
            isPresent: { type: Boolean, default: false }
        }
    ]
}, { timestamps: true });

module.exports = mongoose.model('stdAattendance', stdAttendanceSchema);