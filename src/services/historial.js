
const Historial = require("../models/historial");

exports.findAll = function () {
	return Historial.findAll();
};

exports.findById = function (id) {
	return Historial.findByPk(id);
};

exports.findByUser = function (usuarioId) {
	return Historial.findAll({
		where: {
			usuarioId,
		},
	});
};


exports.insert = function (data) {
	return Historial.create(data);
};

exports.update = async function (id, data) {
	await Historial.update(data, {
		where: {
			id,
		},
	});
};

exports.deleteById = async function (id) {
	const post = await Historial.findByPk(id);
	await post.destroy();
};