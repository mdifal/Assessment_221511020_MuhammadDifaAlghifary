'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BarangNotas', {
      KodeNota: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        references: {
          model: 'Notas',
          key: 'KodeNota'
        }
      },
      KodeBarang: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: 'Barangs',
          key: 'KodeBarang'
        }
      },
      JumlahBarang: {
        type: Sequelize.INTEGER
      },
      HargaSatuan: {
        type: Sequelize.DECIMAL(10, 2)
      },
      Jumlah: {
        type: Sequelize.DECIMAL(10, 2)
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
    await queryInterface.dropTable('BarangNotas');
  }
};
