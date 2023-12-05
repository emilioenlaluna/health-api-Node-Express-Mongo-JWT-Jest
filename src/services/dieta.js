
const Dieta = require("../models/dieta");

exports.findAll = function () {
	return Dieta.findAll();
};

exports.findById = function (id) {
	return Dieta.findByPk(id);
};

exports.findByUser = function (usuarioId) {
	return Dieta.findAll({
		where: {
			usuarioId,
		},
	});
};


exports.insert = function (data) {
	return Dieta.create(data);
};

exports.update = async function (id, data) {
	await Dieta.update(data, {
		where: {
			id,
		},
	});
};

exports.deleteById = async function (id) {
	const post = await Dieta.findByPk(id);
	await post.destroy();
};