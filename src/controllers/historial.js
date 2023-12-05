const {
    findAll,
    findById,
    findByUser,
    insert,
    update,
    deleteById,
} = require("../services/historial");

exports.listarHistoriales = async function (request, response) {
    const historiales = await findByUser(request.user.id);
    response.status(200).json(historiales);
};

exports.detalleHistorial = async function (request, response) {
    const { id } = request.params;
    const historial = await findById(id);
    response.status(200).json(historial);
};

exports.crearHistorial = async function (request, response) {
    const {
        alergias,
        enfermedadesCronicas,
        cirugiasAnteriores,
        medicamentosTomados,
    } = request.body;
    const historial = await insert({
        alergias,
        enfermedadesCronicas,
        cirugiasAnteriores,
        medicamentosTomados,
        UsuarioId: request.user.id,
    });
    response.status(201).json(historial);
};

exports.actualizarHistorial = async function (request, response) {
    const {
        alergias,
        enfermedadesCronicas,
        cirugiasAnteriores,
        medicamentosTomados,
    } = request.body;
    const { id } = request.params;

    await update(id, {
        alergias,
        enfermedadesCronicas,
        cirugiasAnteriores,
        medicamentosTomados,
    });
    response.status(204).end();
};

exports.borrarHistorial = async function (request, response) {
    const { id } = request.params;
    await deleteById(id);
    response.status(204).end();
};
