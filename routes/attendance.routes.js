const router = require('express').Router();
const stdAttendanceController = require('../controllers/std-attendances.controllers');
const tchAttendanceController = require('../controllers/tch-attendances.controllers');

// define routes here
router.post('/classes/:id/attendance', stdAttendanceController.createStdAttendance);
router.get('/classes/:id/attendance', stdAttendanceController.viewStdAttendance);
router.get('/attendance/student', stdAttendanceController.viewAllStdAttendance);
router.put('/attendance/student/:id', stdAttendanceController.updateStdAttendance);
router.delete('/attendance/student/:id', stdAttendanceController.deleteStdAttendance);

router.post('/attendance/teachers/mark', tchAttendanceController.createTchAttendance);
router.get('/attendance/teacher', tchAttendanceController.viewTchAttendance);
router.get('/attendance/teacher/:id', tchAttendanceController.viewTchAttendanceById);
router.put('/attendance/teacher/:id', tchAttendanceController.updateTchAttendance);
router.delete('/attendance/teacher/:id', tchAttendanceController.deleteTchAttendance);


module.exports = router;