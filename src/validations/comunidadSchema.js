const Joi = require("joi");

// Define el esquema de validación Joi para el modelo "Comunidad"
exports.comunidadSchema = Joi.object({
  nombreGrupo: Joi.string().required(),
  descripcion: Joi.string().allow("").optional(),
  fechaCreacion: Joi.date().iso().required(),
});
