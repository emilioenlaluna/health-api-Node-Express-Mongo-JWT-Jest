const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("Alerta", {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contenido: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      fechaHora: {
        type: DataTypes.DATE,
        allowNull: false,
      },
});