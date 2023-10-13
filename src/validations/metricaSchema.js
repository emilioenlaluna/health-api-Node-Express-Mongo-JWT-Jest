const Joi = require("joi");

// Define el esquema de validación Joi para el modelo "Metrica"
exports.metricaSchema = Joi.object({
  circunferenciaCintura: Joi.number().positive().allow(null).optional(),
  presionArterial: Joi.string().allow("").optional(),
  imc: Joi.number().positive().allow(null).optional(),
  peso: Joi.number().positive().allow(null).optional(),
  altura: Joi.number().positive().allow(null).optional(),
});
