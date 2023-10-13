const Joi = require("joi");

exports.paramsSchema = Joi.object({
	id: Joi.number().required(),
});