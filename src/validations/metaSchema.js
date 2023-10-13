const Joi = require("joi");

// Define el esquema de validación Joi para el modelo "Meta"
exports.metaSchema = Joi.object({
  tipoMeta: Joi.string().required(),
  valorMeta: Joi.number().positive().required(),
  fechaLimite: Joi.date().iso().required(),
});
