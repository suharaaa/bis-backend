const router = require('express').Router();
const teacherController = require('../controllers/teachers.controllers');

// define routes here

router.post('/teachers',teacherController.addTeacher);
router.get('/teachers',teacherController.viewTeacher);
// router.get('/teachers/:id',teacherController.findTeacherByID);
router.put('/teachers/:id',teacherController.updateTeacher);
router.delete('/teachers/:id',teacherController.deleteTeacher);
router.get('/teachers/tid', teacherController.getNextTid);

module.exports = router;



