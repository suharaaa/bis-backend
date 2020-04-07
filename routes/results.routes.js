const router = require('express').Router();
const resultsControllers = require('../controllers/results.controllers');

// define routes here

router.post('/results',resultsControllers.createNewResult);
router.put('/results/:id',resultsControllers.UpdateResults);
router.delete('/results/:id',resultsControllers.DeleteResults);
router.get('/results',resultsControllers.viewResults);

module.exports = router;



