require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 3000

const routes = require('./routers')
const errorHandler = require('./middlewares/errorHandler')
const cors = require('cors')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use(routes)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server listen on port: ${PORT}`)
})

module.exports = app