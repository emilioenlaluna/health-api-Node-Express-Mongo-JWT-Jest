const {
    findAll,
    findById,
    insert,
    update,
    deleteById,
} = require("../services/alerta");

exports.listarAlertas = async function (request, response) {
    const alertas = await findAll();
    response.status(200).json(alertas);
};

exports.detalleAlerta = async function (request, response) {
    const { id } = request.params;
    const alerta = await findById(id);
    response.status(200).json(alerta);
};

exports.crearAlerta = async function (request, response) {
    const { titulo, contenido, fechaHora, imagen } = request.body;
    const alerta = await insert({ titulo, contenido, fechaHora, imagen });
    response.status(201).json(alerta);
};

exports.actualizarAlerta = async function (request, response) {
    const { titulo, contenido, fechaHora, imagen } = request.body;
    const { id } = request.params;

    await update(id, { titulo, contenido, fechaHora, imagen });
    response.status(204).end();
};

exports.borrarAlerta = async function (request, response) {
    const { id } = request.params;
    await deleteById(id);
    response.status(204).end();
};
