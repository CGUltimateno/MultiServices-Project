const express = require('express');
const ProductCtrl = require('../controllers/product-ctrl');
const router = express.Router();

router.get('/products', ProductCtrl.getProducts);

module.exports = router