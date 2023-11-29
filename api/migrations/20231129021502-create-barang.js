'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Barangs', {
      KodeBarang: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      NamaBarang: {
        type: Sequelize.STRING
      },
      Satuan: {
        type: Sequelize.STRING
      },
      HargaSatuan: {
        type: Sequelize.DECIMAL(10, 2)
      },
      Stok: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Barangs');
  }
};
