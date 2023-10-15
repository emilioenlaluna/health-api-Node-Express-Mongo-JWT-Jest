const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("Dieta", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
  tipoDieta: {
    type: DataTypes.STRING,
  },
  calorias: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  proteinas: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  carbohidratos: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  grasas: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  fibra: {
    type: DataTypes.FLOAT,
  },
  imagen: {
    type: DataTypes.STRING,
  },
     
});

