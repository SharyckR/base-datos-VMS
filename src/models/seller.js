const mongoose = require('mongoose')
const schema = mongoose.Schema

const vendedorSchema = schema({
    Name: String,
    TypeID: String,
    Id: String,
    Phone: String,
    Address: String
})

const vendedor = mongoose.model('sellers' ,vendedorSchema)

module.exports = vendedor