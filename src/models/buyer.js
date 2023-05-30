const mongoose = require('mongoose')
const schema = mongoose.Schema

const buyerSchema = schema({
    FristName: String,
    LastName: String,
    TypeId: String,
    ID: String,
    Phone: String,
    Address: String
})

const buyer = mongoose.model('buyers', buyerSchema)

module.exports = buyer