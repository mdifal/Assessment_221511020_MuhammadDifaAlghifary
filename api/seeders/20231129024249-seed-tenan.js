'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tenans', [
      {
        KodeTenan: 'T001',
        NamaTenan: 'Warung Makan Sederhana',
        HP: '081234567890',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        KodeTenan: 'T002',
        NamaTenan: 'Cafe Santai',
        HP: '087654321098',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Tambahkan data lain sesuai kebutuhan
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tenans', null, {});
  },
};
