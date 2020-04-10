const mongoose = require('mongoose');
const { Schema } = mongoose;

const teacherAttendanceSchema = new Schema({
    teacher: { type: Schema.Types.ObjectId, ref: 'teachers' },
    date: { type: String, required: true },
    status: { type: String, enum: ['present', 'onleave'], default: 'present' }
}, { timestamps: true });

module.exports = mongoose.model('TeacherAttendance', teacherAttendanceSchema);