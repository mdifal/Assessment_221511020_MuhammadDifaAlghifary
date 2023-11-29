const express = require('express');
const router = express.Router();
const kasirController = require('../controllers/kasirController');

// Route untuk menampilkan semua data barang
router.get('/', kasirController.getAllKasir);


module.exports = router;
