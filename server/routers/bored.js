const express = require('express');
const router = express.Router();
const authentication = require('../middlewares/authentication');

const boredController = require('../controllers/boredController');

router.use(authentication);
router.get('/bored', boredController.randomActivity);
router.get('/bored/:type', boredController.chooseActivity);

module.exports = router;