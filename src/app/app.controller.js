/* libraries */
const express = require('express')
const router = express.Router()

/* Models */
const Document = require('./schema.model')

function documentRouter(dependencies) {

    router.post('/insert', async (req, res) => {
        try {
            //Insert a bulk data
            let docs = []
            for (var i = 0; i < 1000000; i++) {// Create 1 million of docs
                docs.push({
                    title: 'Document test ' + i,
                    number: i
                })
            }

            Document.collection.insertMany(docs, bulkInsert)// Insert 1 million of docs

            function bulkInsert(err, docs) {
                if (err)
                    console.log(err)
                // TODO: handle error
                else
                    console.info("Saved Documents!") // Be happy!
            }

            return res.status(200).send({ message: 'Successful!' })
        } catch (error) {
            console.log(error)
            return res.status(400).send({ message: 'Something Wrong!' })
        }
    })

    return router
}

module.exports = documentRouter
