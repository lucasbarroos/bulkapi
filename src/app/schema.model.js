const mongoose = require('../database')
const Schema = mongoose.Schema

const DocumentSchema = new Schema({
    title: { type: String, required: true },
    number: { type: String }
}, { timestamps: true })

const Document = mongoose.model('document', DocumentSchema)

module.exports = Document
