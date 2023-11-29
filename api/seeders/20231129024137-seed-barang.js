'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Barangs', [
      {
        KodeBarang: 'B001',
        NamaBarang: 'Pensil',
        Satuan: 'pcs',
        HargaSatuan: 1.5,
        Stok: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        KodeBarang: 'B002',
        NamaBarang: 'Buku Tulis',
        Satuan: 'pcs',
        HargaSatuan: 5.0,
        Stok: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Tambahkan data lain sesuai kebutuhan
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Barangs', null, {});
  },
};
