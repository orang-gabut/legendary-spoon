const express = require('express');
const router = express.Router();
const authentication = require('../middlewares/authentication');

const boredController = require('../controllers/boredController');

router.use(authentication);
router.get('/', boredController.randomActivity);
router.get('/:type', boredController.chooseActivity);

module.exports = router;