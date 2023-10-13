const Joi = require("joi");

// Define el esquema de validación Joi para el modelo "Dieta"
exports.dietaSchema = Joi.object({
  fechaHoraConsumo: Joi.date().iso().required(),
  cantidad: Joi.number().positive().required(),
});
