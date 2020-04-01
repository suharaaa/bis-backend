const router = require('express').Router();
const teachersController = require('../controllers/teachers.controllers');

// define routes here

router.post('/teachers',teachersController.addTeacher);
router.get('/teachers',teachersController.findTeacher);
router.get('/teachers/:id',teachersController.findTeacherByID);
router.put('/teachers/:id',teachersController.updateTeacher);
router.delete('/teachers/:id',teachersController.DeleteTeacher);

module.exports = router;



