const Joi = require("joi");

// Define el esquema de validación Joi para el modelo "Meta"
exports.metaSchema = Joi.object({
  tipoMeta: Joi.string().required(),
  valorMeta: Joi.number().positive().required(),
  fechaLimite: Joi.date().iso().required(),
  descripcionMeta: Joi.string().allow(null),
  estadoMeta: Joi.string().allow(null),
  progreso: Joi.number().allow(null),
});
