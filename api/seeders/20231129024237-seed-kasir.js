'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Kasirs', [
      {
        KodeKasir: 'K001',
        Nama: 'John Doe',
        HP: '081234567890',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        KodeKasir: 'K002',
        Nama: 'Jane Doe',
        HP: '087654321098',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Tambahkan data lain sesuai kebutuhan
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Kasirs', null, {});
  },
};
