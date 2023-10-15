const {
    findAll,
    findById,
    insert,
    update,
    deleteById,
} = require("../services/usuarioComunidad");

exports.listarUsuarioComunidades = async function (request, response) {
    const usuarioComunidades = await findAll();
    response.status(200).json(usuarioComunidades);
};

exports.detalleUsuarioComunidad = async function (request, response) {
    const { id } = request.params;
    const usuarioComunidad = await findById(id);
    response.status(200).json(usuarioComunidad);
};

exports.crearUsuarioComunidad = async function (request, response) {
    const {
        isActive,
        fechaIngreso,
        usuarioId, // Relaciona con Usuario
        comunidadId, // Relaciona con Comunidad
    } = request.body;
    const usuarioComunidad = await insert({
        isActive,
        fechaIngreso,
        usuarioId,
        comunidadId,
    });
    response.status(201).json(usuarioComunidad);
};

exports.actualizarUsuarioComunidad = async function (request, response) {
    const {
        isActive,
        fechaIngreso,
        usuarioId,
        comunidadId,
    } = request.body;
    const { id } = request.params;

    await update(id, {
        isActive,
        fechaIngreso,
        usuarioId,
        comunidadId,
    });
    response.status(204).end();
};

exports.borrarUsuarioComunidad = async function (request, response) {
    const { id } = request.params;
    await deleteById(id);
    response.status(204).end();
};
