// productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// GET all products
router.get('/api', productController.getAllProducts);

// POST a new product
router.post('/api', productController.createProduct);

module.exports = router;
