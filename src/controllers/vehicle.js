const ObjModel =  require('../models/vehicle')

const addvehicle = async (req, res, next) => {
    try {
        if (!req.body) {
            res.status(404).send({ message: 'NOT FOUND DATA' })
        }

        const vehicle = await ObjModel.insertMany(req.body)

        if (vehicle) {
            res.status(201).send({ message: 'vehicle successfully', datos: vehicle })
        }

    } catch (err) {
        console.log(err)
    }
}

const getvehicles = async (req, res) => {
    try {
        const Data = await ObjModel.find({})
        if (!Data) return res.status(404).send({ message: 'Not Data' })
        res.status(200).send({ message: 'Data', datos: Data })
    } catch (e) {
        console.log(e)
    }
}

const getvehicle = async(req , res) => {
    try {
        const Data = await ObjModel.findOne({ _id : req.params.id})
        if (!Data) return res.status(404).send({ message: 'Not Data' })
        res.status(200).send({ message: 'Data', datos: Data })
    } catch (e) {
        console.log(e)
    }
}

module.exports = { addvehicle, getvehicles, getvehicle }
