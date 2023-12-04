const {
    findAll,
    findById,
    findByUser,
    insert,
    update,
    deleteById,
} = require("../services/ejercicio");

exports.listarEjercicios = async function (request, response) {
    const ejercicios = await findByUser(request.user.id);
    response.status(200).json(ejercicios);
};

exports.detalleEjercicio = async function (request, response) {
    const { id } = request.params;
    const ejercicio = await findById(id);
    response.status(200).json(ejercicio);
};

exports.crearEjercicio = async function (request, response) {
    const {
        nombre,
        descripcion,
        tipoDeEjercicio,
        duracionEstimada,
        grupoMuscularTrabajado,
        nivelDeDificultad,
        caloriasQuemadas,
        imagenDelEjercicio,
        imagen,
    } = request.body;
    const ejercicio = await insert({
        nombre,
        descripcion,
        tipoDeEjercicio,
        duracionEstimada,
        grupoMuscularTrabajado,
        nivelDeDificultad,
        caloriasQuemadas,
        imagenDelEjercicio,
        imagen,
        UsuarioId: request.user.id,
    });
    response.status(201).json(ejercicio);
};

exports.actualizarEjercicio = async function (request, response) {
    const {
        nombre,
        descripcion,
        tipoDeEjercicio,
        duracionEstimada,
        grupoMuscularTrabajado,
        nivelDeDificultad,
        caloriasQuemadas,
        imagenDelEjercicio,
        imagen,
    } = request.body;
    const { id } = request.params;

    await update(id, {
        nombre,
        descripcion,
        tipoDeEjercicio,
        duracionEstimada,
        grupoMuscularTrabajado,
        nivelDeDificultad,
        caloriasQuemadas,
        imagenDelEjercicio,
        imagen,
    });
    response.status(204).end();
};

exports.borrarEjercicio = async function (request, response) {
    const { id } = request.params;
    await deleteById(id);
    response.status(204).end();
};
