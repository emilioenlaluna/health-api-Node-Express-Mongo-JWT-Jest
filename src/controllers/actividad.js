const {
	findAll,
	findById,
	insert,
	deleteById,
	update,
} = require("../services/actividad");

exports.listarActividades = async function (request, response) {
	const actividades = await findAll(request.user.id);
	response.status(200).json(actividades);
};

exports.detalleActividad = async function (request, response) {
	const { id } = request.params;
	const actividad = await findById(id);
	response.status(200).json(actividad);
};

exports.detalleActividadUsuario = async function (request, response) {
	const { id } = request.params;
	const actividad = await findAll(id);
	response.status(200).json(actividad);
};

exports.crearActividad = async function (request, response) {
	const { duracion, caloriasQuemadas,fecha,estado,progreso} = request.body;
	const actividad = await insert({  duracion, caloriasQuemadas,fecha,estado,progreso, usuarioId: request.user.id });
	response.status(201).json(actividad);
};

exports.actualizarActividad = async function (request, response) {
	const { duracion, caloriasQuemadas,fecha,estado,progreso } = request.body;
	const { id } = request.params;

	await update(id, { duracion, caloriasQuemadas,fecha,estado,progreso });
	response.status(204).end();
};

exports.borrarActividad = async function (request, response) {
	const { id } = request.params;
	await deleteById(id);
	response.status(204).end();
};