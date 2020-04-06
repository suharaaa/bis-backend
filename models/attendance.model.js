const mongoose = require('mongoose');
const { Schema } = mongoose;

const attendanceSchema = new Schema({

    records: [
        { 
           teacher: { type: Schema.Types.ObjectId, ref: 'teachers'},
           isPresent: { type: Boolean, default:false } 
        }
    ],
    count: {type: Number}
},{ timestamps: true });

module.exports = mongoose.model('Attendance', attendanceSchema);