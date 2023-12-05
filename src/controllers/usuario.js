const { agregarUsuario, encontrarPorUsername, findOneByEmail } = require("../services/usuario");

exports.crearUsuario = async function (request, response) {
	const { email, username, password } = request.body;
	//Check if user exists
	const usernameExists = await encontrarPorUsername(username);
	if (usernameExists) {
	  return response.status(400).json({ message: "El usuario ya existe" });
	}
	const emailExists = await findOneByEmail(email);
	if (emailExists) {
	  return response.status(400).json({ message: "Esta email ya está en uso" });
	}

  const user = await agregarUsuario({ email, username, password });
  response.status(201).json(user);
};

exports.me = async function (request, response) {
  const { username, email } = request.user;
  response.status(200).json({ username, email });
};
