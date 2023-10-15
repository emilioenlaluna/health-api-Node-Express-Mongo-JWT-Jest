module.exports = sequelize.define("DietaComida", {
	

	horaIngesta: {
		type: DataTypes.STRING,
		allowNull: false,
	  },
      porciones: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
	  
      cantidad: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
});