
const Meta = require("../models/meta");

exports.findAll = function () {
	return Meta.findAll();
};

exports.findById = function (id) {
	return Meta.findByPk(id);
};

exports.insert = function (data) {
	return Meta.create(data);
};

exports.update = async function (id, data) {
	await Meta.update(data, {
		where: {
			id,
		},
	});
};

exports.deleteById = async function (id) {
	const post = await Meta.findByPk(id);
	await post.destroy();
};