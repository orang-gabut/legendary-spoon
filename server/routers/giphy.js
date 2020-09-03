const router = require('express').Router()
const authentication = require('../middlewares/authentication')
const GiphyController = require('../controllers/giphyController')

router.use(authentication)
router.get('/', GiphyController.generate)

module.exports = router