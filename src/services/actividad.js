const Actividad = require("../models/actividad");

exports.findAll = function (usuarioId) {
	return Actividad.findAll({
		where: {
			usuarioId,
		},
	});
};


exports.findById = function (id) {
	return Actividad.findByPk(id);
};

exports.insert = function (data) {
	return Actividad.create(data);
};

exports.update = async function (id, data) {
	await Actividad.update(data, {
		where: {
			id,
		},
	});
};

exports.deleteById = async function (id) {
	const post = await Actividad.findByPk(id);
	await post.destroy();
};