const router = require('express').Router();
const studentController = require('../controllers/students.controllers')

// define routes here
router.get('/students/admissionNumber', studentController.getNextAdmissionNumber);
router.post('/students', studentController.enrollStudent);
router.get('/students', studentController.viewStudents);
router.get('/students/archived', studentController.viewUnenrolledStudents);
router.get('/students/:id', studentController.viewStudentId);
router.put('/students/:id', studentController.updateStudent);
router.put('/students/:id/archived', studentController.unenrollStudent);
router.delete('/students/:id', studentController.deleteStudentById);

module.exports = router;