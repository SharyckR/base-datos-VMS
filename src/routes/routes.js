const sellerController = require('../controllers/seller')
const buyerController = require('../controllers/buyer')
const vehicleController = require('../controllers/vehicle')
const express = require('express');
const router = express.Router();

router.post('/addseller', (req, res) => {
  return sellerController.addSeller(req, res)
})

router.get('/getSellers', (req, res) => {
  return sellerController.getSellers(req, res)
})

router.post('/addbuyer', (req, res) => {
  return buyerController.addbuyer(req, res)
})

router.get('/getbuyers', (req, res) => {
  return buyerController.getbuyers(req, res)
})

router.get('/getbuyer/:id', (req, res) => {
  return buyerController.getbuyer(req, res)
})

router.post('/addvehicle', (req, res) => {
  return vehicleController.addvehicle(req, res)
})

router.get('/getvehicles', (req, res) => {
  return vehicleController.getvehicles(req, res)
})

router.get('/getvehicle/:id', (req, res) => {
  return vehicleController.getvehicle(req, res)
})

module.exports = router;