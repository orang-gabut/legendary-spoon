const route = require('express').Router()
const userController = require('../controllers/userController')

const routerBoredApi = require('../routers/bored');
const routerGiphyApi = require('../routers/giphy');

route.use('/bored', routerBoredApi);
route.use('/giphy', routerGiphyApi);

route.post('/register', userController.register)
route.post('/login', userController.login)

module.exports = route