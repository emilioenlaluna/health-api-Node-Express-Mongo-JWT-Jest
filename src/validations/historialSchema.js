const Joi = require("joi");

// Define el esquema de validación Joi para el modelo "Historial"
exports.historialSchema = Joi.object({
  alergias: Joi.string().allow("").optional(),
  enfermedadesCronicas: Joi.string().allow("").optional(),
  cirugiasAnteriores: Joi.string().allow("").optional(),
  medicamentosTomados: Joi.string().allow("").optional(),
});
