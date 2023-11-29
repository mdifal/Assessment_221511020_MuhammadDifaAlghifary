'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Barang extends Model {
    static associate(models) {
      // Tambahkan relasi di sini jika diperlukan
    }
  }
  Barang.init(
    {
      KodeBarang: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      NamaBarang: DataTypes.STRING,
      Satuan: DataTypes.STRING,
      HargaSatuan: DataTypes.DECIMAL(10, 2),
      Stok: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Barang',
      tableName: 'Barangs',
      timestamps: true,
    }
  );
  return Barang;
};
