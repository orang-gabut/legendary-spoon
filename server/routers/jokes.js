const express = require('express');
const router = express.Router();
const authentication = require('../middlewares/authentication');

const JokesController = require('../controllers/jokesController');

// router.use(authentication);
router.get('/', JokesController.getJoke);
// router.get('/:type', JokesController.chooseActivity);

module.exports = router;