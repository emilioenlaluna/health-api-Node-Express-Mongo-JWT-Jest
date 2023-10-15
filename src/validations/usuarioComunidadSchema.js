const Joi = require("joi");

// Define el esquema de validación Joi para el modelo "UsuarioComunidad"
exports.usuarioComunidadSchema = Joi.object({
  isActive: Joi.boolean().required(),
  fechaIngreso: Joi.date().iso().required(),
});
