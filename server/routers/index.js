const route = require('express').Router()
const userController = require('../controllers/userController')

const routerBoredApi = require('../routers/bored');
const routerGiphyApi = require('../routers/giphy');
const routerJokes = require('./jokes');

route.use('/bored', routerBoredApi);
route.use('/giphy', routerGiphyApi);
route.use('/jokes', routerJokes);

route.post('/register', userController.register)
route.post('/login', userController.login)

module.exports = route