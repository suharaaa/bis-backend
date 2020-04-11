const mongoose = require('mongoose');
const { Schema } = mongoose;

const teacherAttendanceSchema = new Schema({
    teacher: { type: Schema.Types.ObjectId, ref: 'teachers' },
    date: { type: String, required: true },
    status: { type: String, enum: ['present', 'onleave', 'absent'], default: 'present' }
}, { timestamps: true, strict: false });

teacherAttendanceSchema.index({ teacher: 1, date: 1 }, { unique: true });

module.exports = mongoose.model('TeacherAttendance', teacherAttendanceSchema);