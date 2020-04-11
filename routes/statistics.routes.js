const router = require('express').Router();
const statisticsController = require('../controllers/statistics.controller');

router.get('/statistics', statisticsController.getStatistics);

module.exports = router;



