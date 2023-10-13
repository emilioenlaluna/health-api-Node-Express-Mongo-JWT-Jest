const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("Meta", {
    tipoMeta: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      valorMeta: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      fechaLimite: {
        type: DataTypes.DATE,
        allowNull: false,
      },
});
