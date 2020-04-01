const router = require('express').Router();
const stdAttendanceController = require('../controllers/std-attendances.controllers');
const tchAttendanceController = require('../controllers/tch-attendances.controllers');

// define routes here

router.post('/attendance/students/mark', stdAttendanceController.addStdAttendance);
router.post('/attendance/teachers/mark', tchAttendanceController.addTchAttendance);
router.get('/attendance/students', stdAttendanceController.viewStdAttendances);
router.get('/attendance/teachers', tchAttendanceController.viewTchAttendances);
router.get('/attendance/students/:id', stdAttendanceController.viewStdAttendanceById);
router.get('/attendance/teachers/:id', tchAttendanceController.viewTchAttendanceById);
router.put('/attendance/students/:id', stdAttendanceController.updateStdAttendanceById);
router.put('/attendance/teachers/:id', tchAttendanceController.updateTchAttendanceById);
router.delete('/attendance/students/:id', stdAttendanceController.deleteStdAttendanceById);
router.delete('/attendance/teachers/:id', tchAttendanceController.deleteTchAttendanceById);


module.exports = router;