'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Nota extends Model {
    static associate(models) {
      Nota.belongsTo(models.Tenan, { foreignKey: 'KodeTenan' });
      Nota.belongsTo(models.Kasir, { foreignKey: 'KodeKasir' });
      Nota.hasMany(models.BarangNota, { foreignKey: 'KodeNota' });
    }
  }
  Nota.init(
    {
      KodeNota: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      KodeTenan: DataTypes.STRING,
      KodeKasir: DataTypes.STRING,
      TglNota: DataTypes.DATE,
      JamNota: DataTypes.TIME,
      JumlahBelanja: DataTypes.DECIMAL(10, 2),
      Diskon: DataTypes.DECIMAL(5, 2),
      Total: DataTypes.DECIMAL(10, 2),
    },
    {
      sequelize,
      modelName: 'Nota',
      tableName: 'Notas',
      timestamps: true,
    }
  );
  return Nota;
};
