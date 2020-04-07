const router = require('express').Router();
const attendanceController = require('../controllers/attendances.controllers');

// define routes here
router.post('/attendance', attendanceController.createAttendance);
router.get('/attendance', attendanceController.viewAttendance);
router.get('/attendance/:id', attendanceController.viewAttendanceById);
router.put('/attendance/:id', attendanceController.updateAttendance);
router.delete('/attendance/:id', attendanceController.deleteAttendance);


module.exports = router;