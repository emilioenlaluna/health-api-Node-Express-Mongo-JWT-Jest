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
      imagen: {
        type: DataTypes.STRING,
      },
	isActive: {
		field: "is_active",
		type: DataTypes.BOOLEAN,
		allowNull: false,
		defaultValue: true,
	},
	fechaCreacion: {
        type: DataTypes.DATE,
        allowNull: false,
      },
});