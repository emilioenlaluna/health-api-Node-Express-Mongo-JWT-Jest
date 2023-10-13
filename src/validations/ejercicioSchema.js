const Joi = require("joi");

// Define el esquema de validación Joi para el modelo "Ejercicio"
exports.ejercicioSchema = Joi.object({
  nombre: Joi.string().required(),
  descripcion: Joi.string().allow("").optional(),
});
