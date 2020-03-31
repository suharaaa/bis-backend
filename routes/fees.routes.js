const router = require('express').Router();
const feesController = require('../controllers/fees.controllers');

// define routes here



router.post('/fees', feesContoller.createNewFee);
router.get('/fees', feesContoller.findFees);
router.get('/fees/:id', feesContoller.findFeeID);
router.put('/fees/:id', feesContoller.UpdateFee);
router.delete('/fees/:id', feesContoller.DeleteFee);



module.exports = router;