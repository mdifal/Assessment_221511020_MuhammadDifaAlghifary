'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tenan extends Model {
    static associate(models) {
      // Tambahkan relasi di sini jika diperlukan
    }
  }
  Tenan.init(
    {
      KodeTenan: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      NamaTenan: DataTypes.STRING,
      HP: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Tenan',
      tableName: 'Tenans',
      timestamps: true,
    }
  );
  return Tenan;
};
