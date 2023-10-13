const Comunidad = require("../models/comunidad");

exports.findAll = function () {
	return Comunidad.findAll();
};

exports.findById = function (id) {
	return Comunidad.findByPk(id);
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