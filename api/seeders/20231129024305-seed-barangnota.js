'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('BarangNotas', [
      {
        KodeNota: 'N001',
        KodeBarang: 'B001',
        JumlahBarang: 5,
        HargaSatuan: 1.5,
        Jumlah: 7.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        KodeNota: 'N002',
        KodeBarang: 'B002',
        JumlahBarang: 2,
        HargaSatuan: 5.0,
        Jumlah: 10.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Tambahkan data lain sesuai kebutuhan
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('BarangNotas', null, {});
  },
};
