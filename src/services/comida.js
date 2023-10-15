const Comida = require("../models/comida");

exports.findAll = function () {
	return Comida.findAll();
};

exports.findById = function (id) {
	return Comida.findByPk(id);
};

exports.insert = function (data) {
	return Comida.create(data);
};

exports.update = async function (id, data) {
	await Comida.update(data, {
		where: {
			id,
		},
	});
};




exports.deleteById = async function (id) {
	const post = await Comida.findByPk(id);
	await post.destroy();
};