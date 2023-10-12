
const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("Historial", {
    alergias: {
        type: DataTypes.TEXT,
      },
      enfermedadesCronicas: {
        type: DataTypes.TEXT,
      },
      cirugiasAnteriores: {
        type: DataTypes.TEXT,
      },
      medicamentosTomados: {
        type: DataTypes.TEXT,
      },
});
