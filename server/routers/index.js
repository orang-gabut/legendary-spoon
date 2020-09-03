const route = require('express').Router()
const userController = require('../controllers/userController')

const routerBoredApi = require('../routers/bored');

route.use('/bored', routerBoredApi);

route.post('/register', userController.register)
route.post('/login', userController.login)

module.exports = route