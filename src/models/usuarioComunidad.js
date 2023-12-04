const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");
const Usuario = require("./usuario");
const Comunidad = require("./comunidad");

module.exports = sequelize.define("UsuarioComunidad", {
  UsuarioId: {
    type: DataTypes.INTEGER,
    references: {
      model: Usuario,
      key: "id",
    },
  },
  ComunidadId: {
    type: DataTypes.INTEGER,
    references: {
      model: Comunidad,
      key: "id",
    },
  },
  isActive: {
    field: "is_active",
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  fechaIngreso: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
});
