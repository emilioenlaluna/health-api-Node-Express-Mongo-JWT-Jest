const Comunidad = require("../models/comunidad");
const Usuario = require("../models/usuario");

exports.findAll = function () {
	return Comunidad.findAll();
};

exports.findActive = function () {
	return Comunidad.findAll({
		where: {
			isActive: true,
		},
		include: {
			model: Usuario,
			as: "creador",
			attributes: ["username"],
		}
	});
};

exports.findById = function (id) {
	return Comunidad.findByPk(id);
};

exports.findByUser = function (creadorId) {
	return Comunidad.findAll({
		where: {
			creadorId,
		},
	});
};

exports.insert = function (data) {
	return Comunidad.create(data);
};

exports.update = async function (id, data) {
	await Comunidad.update(data, {
		where: {
			id,
		},
	});
};

exports.deleteById = async function (id) {
	const post = await Comunidad.findByPk(id);
	await post.destroy();
};

