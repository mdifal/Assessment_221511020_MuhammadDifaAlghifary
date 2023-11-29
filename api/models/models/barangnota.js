'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class BarangNota extends Model {
    static associate(models) {
      BarangNota.belongsTo(models.Nota, { foreignKey: 'KodeNota' });
      BarangNota.belongsTo(models.Barang, { foreignKey: 'KodeBarang' });
    }
  }
  BarangNota.init(
    {
      KodeNota: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      KodeBarang: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      JumlahBarang: DataTypes.INTEGER,
      HargaSatuan: DataTypes.DECIMAL(10, 2),
      Jumlah: DataTypes.DECIMAL(10, 2),
    },
    {
      sequelize,
      modelName: 'BarangNota',
      tableName: 'BarangNotas',
      timestamps: true,
    }
  );
  return BarangNota;
};
