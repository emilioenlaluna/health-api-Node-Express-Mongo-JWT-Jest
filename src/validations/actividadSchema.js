const Joi = require("joi");

// Define el esquema de validación Joi para el modelo "Actividad"
exports.actividadSchema = Joi.object({
  duracion: Joi.number().integer().required(),
  caloriasQuemadas: Joi.number().required(),
  fecha: Joi.date().iso().required(),
  estado: Joi.string().allow(null),
  progreso: Joi.number().allow(null),
});
