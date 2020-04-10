const router = require('express').Router();
const teacherController = require('../controllers/teachers.controllers');

// define routes here

router.post('/teachers',teacherController.addTeacher);
router.get('/teachers',teacherController.viewTeacher);
router.put('/teachers/:id',teacherController.updateTeacher);
router.delete('/teachers/:id',teacherController.deleteTeacher);
router.get('/teachers/tid', teacherController.getNextTid);
router.get('/teachers/:id', teacherController.viewTeacherId);

module.exports = router;



