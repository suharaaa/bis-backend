const router = require('express').Router();
const usersController = require('../controllers/users.controllers');

// define routes here


router.post('/users',usersController.createNewUser);
router.get('/users',usersController.findUsers);
router.get('/users/:id',usersController.findUserID);
router.put('/users/:id',usersController.UpdateUser);
router.delete('/users/:id',usersController.DeleteUser);




module.exports = router;