const router = require('express').Router();
const feesController = require('../controllers/fees.controllers');

// define routes here



router.post('/fees', feesContoller.createNewFee);
app.get('/fees', feesContoller.findFees);
app.get('/fees/:id', feesContoller.findFeeID);
app.put('/fees/:id', feesContoller.UpdateFee);
app.delete('/fees/:id', feesContoller.DeleteFee);








module.exports = router;