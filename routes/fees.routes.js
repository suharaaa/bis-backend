const router = require('express').Router();
const feesController = require('../controllers/fees.controllers');

// define routes here



router.post('/fees',feesController.createNewFee);
router.get('/fees',feesController.findFees);
router.get('/fees/:id',feesController.findFeeID);
router.put('/fees/:id',feesController.UpdateFee);
router.delete('/fees/:id',feesController.DeleteFee);




module.exports = router;