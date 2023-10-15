const Joi = require("joi");

// Define el esquema de validación Joi para el modelo "Ejercicio"
exports.ejercicioSchema = Joi.object({
  nombre: Joi.string().required(),
  descripcion: Joi.string().allow(null),
  tipoDeEjercicio: Joi.string().allow(null),
  duracionEstimada: Joi.number().integer().allow(null),
  grupoMuscularTrabajado: Joi.string().allow(null),
  nivelDeDificultad: Joi.number().integer().allow(null),
  caloriasQuemadas: Joi.number().allow(null),
  imagenDelEjercicio: Joi.string().allow(null),
  imagen: Joi.string().allow(null),
});
