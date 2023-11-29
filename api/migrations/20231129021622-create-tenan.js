'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tenans', {
      KodeTenan: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      NamaTenan: {
        type: Sequelize.STRING
      },
      HP: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Tenans');
  }
};
