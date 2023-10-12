const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("Actividad", {
    tipoEjercicio: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      duracion: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      caloriasQuemadas: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
});