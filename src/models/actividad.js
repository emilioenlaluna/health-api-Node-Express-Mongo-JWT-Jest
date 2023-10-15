const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("Actividad", {
      duracion: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      caloriasQuemadas: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      fecha: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      estado: {
        type: DataTypes.STRING,
      },
      progreso: {
        type: DataTypes.FLOAT,
      },
});