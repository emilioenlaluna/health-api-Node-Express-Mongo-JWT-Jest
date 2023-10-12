const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("Dieta", {
    fechaHoraConsumo: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      cantidad: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
});

