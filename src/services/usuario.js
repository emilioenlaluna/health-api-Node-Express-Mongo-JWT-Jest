const Usuario = require("../models/usuario");

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