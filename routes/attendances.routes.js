const router = require('express').Router();
const teacherAttendanceController = require('../controllers/teacher-attendance.controller');

// define routes here
router.get('/attendance/teachers', teacherAttendanceController.getTeacherAttendanceByDate);
router.post('/attendance/teachers/:id', teacherAttendanceController.createNewTeacherAttendance);
router.put('/attendance/teachers/:id', teacherAttendanceController.updateTeacherAttendance);
router.delete('/attendance/:id', teacherAttendanceController.deleteTeacherAttendance);

module.exports = router;