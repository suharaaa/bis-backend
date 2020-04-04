const router = require('express').Router();
const stdAttendanceController = require('../controllers/std-attendances.controllers');
const tchAttendanceController = require('../controllers/tch-attendances.controllers');

// define routes here
router.post('/classes/:id/attendance', stdAttendanceController.createStdAttendance);
router.get('/classes/:id/attendance', stdAttendanceController.viewStdAttendance);
router.put('/attendance/:id', stdAttendanceController.updateStdAttendance);
router.delete('/attendance/:id', stdAttendanceController.deleteStdAttendance);

router.post('/attendance', tchAttendanceController.createTchAttendance);
router.get('/attendance', tchAttendanceController.viewTchAttendance);
router.put('/attendance/:id', tchAttendanceController.updateTchAttendance);
router.delete('/attendance/:id', tchAttendanceController.deleteTchAttendance);


module.exports = router;