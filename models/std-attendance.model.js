const mongoose = require('mongoose');
const { Schema } = mongoose;

const stdAttendanceSchema = new Schema ({
    
    date : { type: Date, default: new Date()},
    class: { type: Schema.Types.ObjectId, ref: 'Classes'},
    records: [
        {
            student: { type: Schema.Types.ObjectId, ref: 'student'},
            isPresent: { type: Boolean, default: false }
        }
    ],
    count: {type:Number}
},{ timestamps: true });

module.exports = mongoose.model('stdAattendance', stdAttendanceSchema);