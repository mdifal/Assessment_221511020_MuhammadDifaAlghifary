const express = require('express');
const router = express.Router();
const tenanController = require('../controllers/tenanController');

// Route untuk menampilkan semua data barang
router.get('/', tenanController.getAllTenan);


module.exports = router;
