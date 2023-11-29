const express = require('express');
const router = express.Router();
const barangController = require('../controllers/barangController');

// Route untuk menampilkan semua data barang
router.get('/', barangController.getAllBarang);

// Route untuk menampilkan data barang berdasarkan KodeBarang
//router.get('/barang/:KodeBarang', barangController.getBarangByKode);

router.post('/createBarang', barangController.addBarang);
router.patch('/updateBarang/:KodeBarang', barangController.editBarang);
router.delete('/delete/:KodeBarang', barangController.deleteBarang);

module.exports = router;
