const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("Metricas", {
    circunferenciaCintura: {
        type: DataTypes.FLOAT,
      },
      presionArterial: {
        type: DataTypes.STRING,
      },
      imc: {
        type: DataTypes.FLOAT,
      },
      peso: {
        type: DataTypes.FLOAT,
      },
      altura: {
        type: DataTypes.FLOAT,
      },
});