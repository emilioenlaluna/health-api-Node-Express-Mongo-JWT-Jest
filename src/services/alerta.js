const Alerta = require("../models/alerta");

exports.findAll = function (usuarioId) {
	return Alerta.findAll({
		where: {
			usuarioId,
		},
	});
};

exports.findById = function (id) {
	return Alerta.findByPk(id);
};


exports.insert = function (data) {
	return Alerta.create(data);
};

exports.update = async function (id, data) {
	await Alerta.update(data, {
		where: {
			id,
		},
	});
};

exports.deleteById = async function (id) {
	const post = await Alerta.findByPk(id);
	await post.destroy();
};