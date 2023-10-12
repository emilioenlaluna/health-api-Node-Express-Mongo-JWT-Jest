const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("UsuarioComunidad", {
	
	isActive: {
		field: "is_active",
		type: DataTypes.BOOLEAN,
		allowNull: false,
		defaultValue: true,
	},
	fechaIngreso: {
		type: DataTypes.DATE,
		allowNull: false,
	  },
	  
});