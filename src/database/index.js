'use strick'

/* Libraries */
const MongoClient = require('mongoose')

const connectionURL = "mongodb://localhost:27017/bulk-db"

MongoClient.connect(connectionURL, { useNewUrlParser: true }, function (error) {
    if (error)
        console.log(error)
    else
        console.log("Mongodb connected!")
})

MongoClient.Promise = global.Promise
module.exports = MongoClient
