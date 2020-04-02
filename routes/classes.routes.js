const router = require('express').Router();
const classController = require('../controllers/classes.controllers');
//define route

router.post('/classes', classController.createNewClass);
router.get('/classes', classController.findClass);
router.get('/classes/:id', classController.findClassID);
router.put('/classes/:id', classController.UpdateClass);
router.delete('/classes/:id', classController.DeleteClass);
router.post('/classes/:id/students', classController.UpdateStudent);

module.exports = router;