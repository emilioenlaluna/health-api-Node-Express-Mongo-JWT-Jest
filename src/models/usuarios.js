const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("Usuarios", {
	username: {
		type: DataTypes.STRING(100),
		allowNull: false,
		unique: true,
	},
	email: {
		type: DataTypes.STRING(100),
		allowNull: false,
		unique: true,
	},
	password: {
		type: DataTypes.STRING(50),
		allowNull: false,
		validate: {
			len: [8, 50],
		},
	},
	isActive: {
		field: "is_active",
		type: DataTypes.BOOLEAN,
		allowNull: false,
		defaultValue: true,
	},
	fechaNacimiento: {
		type: DataTypes.DATE,
		allowNull: false,
	  },
	  genero: {
		type: DataTypes.STRING,
	  },
});