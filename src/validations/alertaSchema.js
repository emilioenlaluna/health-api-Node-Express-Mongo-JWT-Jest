const Joi = require("joi");

// Define el esquema de validación Joi para el modelo "Alerta"
exports.alertaSchema = Joi.object({
  titulo: Joi.string().required(),
  contenido: Joi.string().required(),
  fechaHora: Joi.date().iso().required(),
  imagen: Joi.string().allow(null),
  isActive: Joi.boolean().required(),
  fechaCreacion: Joi.date().iso().required(),
});
