const Joi = require("joi");

// Define el esquema de validación Joi para el modelo "Actividad"
exports.actividadSchema = Joi.object({
  tipoEjercicio: Joi.string().required(),
  duracion: Joi.number().integer().positive().required(),
  caloriasQuemadas: Joi.number().positive().required(),
});
