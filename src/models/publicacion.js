const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("Publicacion", {
	titulo: {
		type: DataTypes.STRING(100),
		allowNull: false,
		validate: {
			len: [5, 100],
		},
	},
	contenido: {
		type: DataTypes.TEXT,
		allowNull: false,
		validate: {
			len: [5, 2500],
		},
	},
	likes: {
		type: DataTypes.INTEGER,
		allowNull: false,
		defaultValue: 0,
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