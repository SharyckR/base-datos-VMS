const mongoose = require('mongoose')
const schema = mongoose.Schema

const vehicleSchema = schema({
    Model: String,
    Status: String,
    Weight: String,
    KindOfVehicle: String,
    Description: String,
    Color: String,
    NumOfChairs: String,
    NumOfDoors: String,
    Price: String,
    Location: String,
    Seller: [{
        Name: String,
        TypeID: String,
        Id: String,
        Phone: String,
        Address: String
    }]
})

const vehicle = mongoose.model('vehicles', vehicleSchema)

module.exports = vehicle