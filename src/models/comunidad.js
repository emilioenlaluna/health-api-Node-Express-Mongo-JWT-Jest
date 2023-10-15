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
      numeroMiembros: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      isActive: {
        field: "is_active",
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      imagen: {
        type: DataTypes.STRING,
      },
     
});

