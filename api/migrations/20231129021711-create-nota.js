'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Notas', {
      KodeNota: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      KodeTenan: {
        type: Sequelize.STRING,
        references: {
          model: 'Tenans',
          key: 'KodeTenan'
        }
      },
      KodeKasir: {
        type: Sequelize.STRING,
        references: {
          model: 'Kasirs',
          key: 'KodeKasir'
        }
      },
      TglNota: {
        type: Sequelize.DATE
      },
      JamNota: {
        type: Sequelize.TIME
      },
      JumlahBelanja: {
        type: Sequelize.DECIMAL(10, 2)
      },
      Diskon: {
        type: Sequelize.DECIMAL(5, 2)
      },
      Total: {
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
    await queryInterface.dropTable('Notas');
  }
};
