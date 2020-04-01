const router = require('express').Router();
const studentController = require('../controllers/students.controllers')

// define routes here
router.post('/student', studentController.enrollStudent);
router.get('/student', studentController.viewStudents);
router.put('/student/:id', studentController.updateStudent);
// router.delete('/student/:id', studentController.deleteStudentById);

module.exports = router;