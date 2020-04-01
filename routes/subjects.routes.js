const router = require('express').Router();
const subjectController = require('../controllers/subjects.controllers');

// define routes here



router.post('/subjects', subjectController.createNewSubject);
router.get('/subjects', subjectController.findSubjects);
router.get('/subjects/:id', subjectController.findSubjectID);
router.put('/subjects/:id', subjectController.UpdateSubject);
router.delete('/subjects/:id', subjectController.DeleteSubject);



module.exports = router;