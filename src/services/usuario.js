const Usuario = require("../models/usuario");

const { hash } = require("./security");

exports.agregarUsuario = function (data) {
	return Usuario.create(data);
};

exports.encontrarPorUsername = function (username) {
	// SELECT * FROM users WHERE username = '...';
	return Usuario.findOne({
		where: {
			username,
		},
	});
};

exports.encontrarPorId = function (id) {
	// SELECT * FROM users WHERE id = '...';
	return Usuario.findByPk(id);
};


exports.save = async function (data) {
	data.password = await hash(data.password);
	const user = await Usuario.create(data);
	delete user.dataValues.password;
	return user;
};

exports.findOneByEmail = function (email) {
	return Usuario.findOne({
		where: {
			email,
		},
	});
};

exports.findById = function (id) {
	return Usuario.findByPk(id);
};