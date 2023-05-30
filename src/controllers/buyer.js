const ObjModel =  require('../models/buyer')

const addbuyer = async (req, res, next) => {
    try {
        if (!req.body) {
            res.status(404).send({ message: 'NOT FOUND DATA' })
        }

        const buyer = await ObjModel.insertMany(req.body)

        if (buyer) {
            res.status(201).send({ message: 'buyer successfully', datos: buyer })
        }

    } catch (err) {
        console.log(err)
    }
}

const getbuyers = async (req, res) => {
    try {
        const Data = await ObjModel.find({})
        if (!Data) return res.status(404).send({ message: 'Not Data' })
        res.status(200).send({ message: 'Data', datos: Data })
    } catch (e) {
        console.log(e)
    }
}

module.exports = { addbuyer, getbuyers }
