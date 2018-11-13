/* Libraries */
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const http = require('http').createServer(app)
const port = 4000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')

    next()
})

//Routes
var appRouter = require('./src/app/app.controller')({ io: app.io })
app.use('/api/v1', appRouter)

mongoose.Promise = global.Promise

http.listen(port, () => console.log('Application running, Port: ' + port))
