const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");
const bcrypt = require("bcrypt");

const User = sequelize.define("Usuario", {
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
		type: DataTypes.STRING,
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
		allowNull: true,
	  },
	  genero: {
		type: DataTypes.STRING,
	  },
},{ timestamps: true });

User.beforeCreate(async (user) => {
	user.password = await bcrypt.hash(user.password, 10);
});

module.exports = User;