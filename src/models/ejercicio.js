
const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("Ejercicio", {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.TEXT,
      },
      tipoDeEjercicio: {
        type: DataTypes.STRING,
      },
      duracionEstimada: {
        type: DataTypes.INTEGER,
      },
      grupoMuscularTrabajado: {
        type: DataTypes.STRING,
      },
      nivelDeDificultad: {
        type: DataTypes.INTEGER,
      },
      caloriasQuemadas: {
        type: DataTypes.FLOAT,
      },
      imagenDelEjercicio: {
        type: DataTypes.STRING,
      },
      imagen: {
        type: DataTypes.STRING,
      },
});
