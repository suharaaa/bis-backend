const router = require('express').Router();
const teacherController = require('../controllers/teachers.controllers');

// define routes here

router.post('/teachers',teacherController.addTeacher);
router.get('/teachers',teacherController.viewTeacher);
router.get('/teachers/:id',teacherController.findTeacherByID);
router.put('/teachers/:id',teacherController.updateTeacher);
router.delete('/teachers/:id',teacherController.DeleteTeacher);

module.exports = router;



