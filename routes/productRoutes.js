const express = require('express');
const router = express.Router();
const { calculateTotalValue } = require('../controllers/productController');

router.post('/total-value', calculateTotalValue);

module.exports = router;
