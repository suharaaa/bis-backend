const router = require('express').Router();
const studentController = require('../controllers/students.controllers')

// define routes here
router.post('/student', studentController.enrollStudent);
router.put('/student/:id', studentController.updateStudent);

module.exports = router;