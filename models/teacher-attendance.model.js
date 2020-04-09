const mongoose = require('mongoose');
const { Schema } = mongoose;

const teacherAttendanceSchema = new Schema({
});


module.exports = mongoose.model('TeacherAttendance', teacherAttendanceSchema);