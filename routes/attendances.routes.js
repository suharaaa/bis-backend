const router = require('express').Router();
const attendanceController = require('../controllers/attendances.controllers');
const teacherAttendanceController = require('../controllers/teacher-attendance.controller');

// define routes here
router.get('/attendance/teachers', teacherAttendanceController.getTeacherAttendanceByDate);
router.post('/attendance/teachers/:id', teacherAttendanceController.createNewTeacherAttendance);
router.put('/attendance/teachers', teacherAttendanceController.updateTeacherAttendance);
router.delete('/attendance/:id', teacherAttendanceController.deleteTeacherAttendance);

router.post('/attendance', attendanceController.createAttendance);
router.get('/attendance', attendanceController.viewAttendance);
router.get('/attendance/:id', attendanceController.viewAttendanceById);
router.put('/attendance/:id', attendanceController.updateAttendance);
// router.delete('/attendance/:id', attendanceController.deleteAttendance);

module.exports = router;