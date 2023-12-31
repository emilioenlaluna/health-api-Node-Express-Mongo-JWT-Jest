const {
    findAll,
    findById,
    insert,
    update,
    deleteById,
    findByUser,
    findActive
} = require("../services/comunidad");

exports.listarComunidades = async function (request, response) {
    const comunidades = await findActive();
    response.status(200).json(comunidades);
};

exports.comunidadesUsuario = async function (request, response) {
    const comunidades = await findByUser(request.user.id);
    response.status(200).json(comunidades);
};

exports.detalleComunidad = async function (request, response) {
    const { id } = request.params;
    const comunidad = await findById(id);
    response.status(200).json(comunidad);
};

exports.crearComunidad = async function (request, response) {
    const {
        nombreGrupo,
        descripcion,
        fechaCreacion,
        numeroMiembros,
        isActive,
        imagen,
    } = request.body;
    const comunidad = await insert({
        nombreGrupo,
        descripcion,
        fechaCreacion,
        numeroMiembros,
        isActive,
        imagen,
        creadorId: request.user.id,
    });
    response.status(201).json(comunidad);
};

exports.actualizarComunidad = async function (request, response) {
    const {
        nombreGrupo,
        descripcion,
        fechaCreacion,
        numeroMiembros,
        isActive,
        imagen,
    } = request.body;
    const { id } = request.params;

    await update(id, {
        nombreGrupo,
        descripcion,
        fechaCreacion,
        numeroMiembros,
        isActive,
        imagen,
    });
    response.status(204).end();
};

exports.borrarComunidad = async function (request, response) {
    const { id } = request.params;
    await deleteById(id);
    response.status(204).end();
};
