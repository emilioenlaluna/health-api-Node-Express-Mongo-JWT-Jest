const { connect, sync } = require("./models/sequelize");



const Actividad = require("./models/actividad");
const Alerta = require("./models/alerta");

const Comida = require("./models/comida");
const Comunidad = require("./models/comunidad");

const Dieta = require("./models/dieta");
const DietaComida = require("./models/dietaComida");
const Ejercicio = require("./models/ejercicio");
const Historial = require("./models/historial");
const Meta = require("./models/meta");
const Metrica = require("./models/metrica");

const Publicacion = require("./models/publicacion");
const Usuario = require("./models/usuario");
const UsuarioComunidad = require("./models/usuarioComunidad");

exports.initDatabase = async function () {

	Usuario.hasMany(Actividad);
	Actividad.belongsTo(Usuario);

	Ejercicio.hasMany(Actividad);
	Actividad.belongsTo(Ejercicio);

	Usuario.hasMany(Alerta);
	Alerta.belongsTo(Usuario);

	Usuario.hasMany(Dieta);
	Dieta.belongsTo(Usuario);

	
	Dieta.hasMany(DietaComida);
	DietaComida.belongsTo(Dieta);

	Comida.hasMany(DietaComida);
	DietaComida.belongsTo(Comida);

	Usuario.hasMany(Historial);
	Historial.belongsTo(Usuario);

	Usuario.hasMany(Meta);
	Meta.belongsTo(Usuario);

	Usuario.hasMany(Metrica);
	Metrica.belongsTo(Usuario);

	Usuario.hasMany(Publicacion);
	Publicacion.belongsTo(Usuario);

	Comunidad.hasMany(Publicacion);
	Publicacion.belongsTo(Comunidad);

	Usuario.hasMany(Comunidad);
	Comunidad.belongsTo(Usuario);

	Usuario.belongsToMany(Comunidad, { through: UsuarioComunidad });
	Comunidad.belongsToMany(Usuario, { through: UsuarioComunidad });

	// Usuario.hasMany(UsuarioComunidad);
	// UsuarioComunidad.belongsTo(Usuario);

	// Comunidad.hasMany(UsuarioComunidad);
	// UsuarioComunidad.belongsTo(Comunidad);

	await connect();
	await sync();
};