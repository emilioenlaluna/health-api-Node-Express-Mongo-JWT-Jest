const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("Comunidad", {
    nombreGrupo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.TEXT,
      },

    fechaCreacion: {
        type: DataTypes.DATE,
        allowNull: false,
      },
     
});

