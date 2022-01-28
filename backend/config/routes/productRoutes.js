const express = require('express')
const router = express.Router()

const productController = require('../../app/controllers/productController')

router.get('/getproduct', productController.getProducts)

module.exports = router