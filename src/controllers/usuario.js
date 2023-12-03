const { agregarUsuario } = require("../services/usuario");


exports.crearUsuario = async function (request, response) {
	const { email, username, password } = request.body;
	const user = await agregarUsuario({ email, username, password });
	response.status(201).json(user);
};

exports.me = async function (request, response) {
	const {username, email} = request.user;
	response.status(200).json({username, email});
};