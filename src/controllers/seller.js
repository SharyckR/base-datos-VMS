const ObjModel = require('../models/seller')


const addSeller = async (req, res, next) => {
    try {
        if (!req.body) {
            res.status(404).send({ message: 'NOT FOUND DATA' })
        }

        const seller = await ObjModel.insertMany(req.body)

        if (seller) {
            res.status(201).send({ message: 'seller successfully', datos: seller })
        }

    } catch (err) {
        console.log(err)
    }
}

const getSellers = async (req, res) => {
    try {
        const Data = await ObjModel.find({})
        if (!Data) return res.status(404).send({ message: 'Not Data' })
        res.status(200).send({ message: 'Data exist', datos: Data })
    } catch (e) {
        console.log(e)
    }
}



module.exports = { addSeller, getSellers }