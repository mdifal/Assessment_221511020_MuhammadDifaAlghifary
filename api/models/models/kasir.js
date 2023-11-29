'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Kasir extends Model {
    static associate(models) {
      // Tambahkan relasi di sini jika diperlukan
    }
  }
  Kasir.init(
    {
      KodeKasir: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      Nama: DataTypes.STRING,
      HP: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Kasir',
      tableName: 'Kasirs',
      timestamps: true,
    }
  );
  return Kasir;
};
