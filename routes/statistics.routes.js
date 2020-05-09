const router = require('express').Router();
const statisticsController = require('../controllers/statistics.controller');

router.get('/statistics', statisticsController.getStatistics);
router.get('/statistics/enrollments', statisticsController.getStudentEnrollmentCountsByYear);
router.get('/statistics/bysubjects', statisticsController.getTeachersBySubjects);

module.exports = router;



