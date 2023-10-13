
const Metrica = require("../models/metrica");

exports.findAll = function () {
	return Metrica.findAll();
};

exports.findById = function (id) {
	return Metrica.findByPk(id);
};

exports.insert = function (data) {
	return Metrica.create(data);
};

exports.update = async function (id, data) {
	await Metrica.update(data, {
		where: {
			id,
		},
	});
};

exports.deleteById = async function (id) {
	const post = await Metrica.findByPk(id);
	await post.destroy();
};