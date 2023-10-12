const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("Comida", {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.TEXT,
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
});

