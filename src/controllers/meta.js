const {
    findAll,
    findById,
    insert,
    update,
    deleteById,
    findByUser,
} = require("../services/meta");

exports.listarMetas = async function (request, response) {
    const metas = await findByUser(request.user.id);
    response.status(200).json(metas);
};

exports.detalleMeta = async function (request, response) {
    const { id } = request.params;
    const meta = await findById(id);
    response.status(200).json(meta);
};

exports.crearMeta = async function (request, response) {
    const {
        tipoMeta,
        valorMeta,
        fechaLimite,
        descripcionMeta,
        estadoMeta,
        progreso,
    } = request.body;
    const meta = await insert({
        tipoMeta,
        valorMeta,
        fechaLimite,
        descripcionMeta,
        estadoMeta,
        progreso,
        UsuarioId: request.user.id,
    });
    response.status(201).json(meta);
};

exports.actualizarMeta = async function (request, response) {
    const {
        tipoMeta,
        valorMeta,
        fechaLimite,
        descripcionMeta,
        estadoMeta,
        progreso,
    } = request.body;
    const { id } = request.params;

    await update(id, {
        tipoMeta,
        valorMeta,
        fechaLimite,
        descripcionMeta,
        estadoMeta,
        progreso,
    });
    response.status(204).end();
};

exports.borrarMeta = async function (request, response) {
    const { id } = request.params;
    await deleteById(id);
    response.status(204).end();
};
