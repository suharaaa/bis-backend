const mongoose = require('mongoose');

const tchAttendanceSchema = new mongoose.Schema({
    date : { type: Date, default: new Date()},
    records: [
        { 
           teacher: { type: Schema.Types.ObjectId, ref: 'teachers'},
           isPresent: {type: Boolean, default:false} 
        }
    ],
    count: {type: Number}
},{ timestamps: true });

module.exports = mongoose.model('tchAttendance', tchAttendanceSchema);