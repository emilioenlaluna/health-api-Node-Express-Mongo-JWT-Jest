const { connect, sync } = require("./models/sequelize");

const Usuario = require("./models/usuario");
const UsuarioComuniadad = require("./models/usuarioComunidad");

exports.initDatabase = async function () {

	Usuario.hasMany(UsuarioComuniadad);
	UsuarioComuniadad.belongsTo(Usuario);

	await connect();
	await sync();
};