
const Ejercicio = require("../models/ejercicio");

exports.findAll = function () {
	return Ejercicio.findAll();
};

exports.findById = function (id) {
	return Ejercicio.findByPk(id);
};

exports.insert = function (data) {
	return Ejercicio.create(data);
};

exports.findByUser = function (usuarioId) {
	return Ejercicio.findAll({
		where: {
			usuarioId,
		},
	});
};


exports.update = async function (id, data) {
	await Ejercicio.update(data, {
		where: {
			id,
		},
	});
};

exports.deleteById = async function (id) {
	const post = await Ejercicio.findByPk(id);
	await post.destroy();
};