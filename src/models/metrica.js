const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("Metrica", {
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
      frecuenciaCardiaca: {
        type: DataTypes.INTEGER,
      },
      temperaturaCorporal: {
        type: DataTypes.FLOAT,
      },
      glucosaEnSangre: {
        type: DataTypes.FLOAT,
      },
      colesterolHDL: {
        type: DataTypes.FLOAT,
      },
      colesterolLDL: {
        type: DataTypes.FLOAT,
      },
      frecuenciaRespiratoria: {
        type: DataTypes.INTEGER,
      },
});