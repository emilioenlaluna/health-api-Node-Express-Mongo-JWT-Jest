const Joi = require("joi");

// Define el esquema de validación Joi para el modelo "Comida"
exports.comidaSchema = Joi.object({
  nombre: Joi.string().required(),
  descripcion: Joi.string().allow("").optional(),
  calorias: Joi.number().integer().positive().required(),
  proteinas: Joi.number().positive().required(),
  carbohidratos: Joi.number().positive().required(),
  grasas: Joi.number().positive().required(),
  fibra: Joi.number().positive().allow(null).optional(),
});
