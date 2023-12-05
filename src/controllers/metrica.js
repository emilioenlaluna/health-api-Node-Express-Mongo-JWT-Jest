const {
    findAll,
    findById,
    insert,
    update,
    deleteById,
    findByUser,
} = require("../services/metrica");

exports.listarMetricas = async function (request, response) {
    const metricas = await findByUser(request.user.id);
    response.status(200).json(metricas);
};

exports.detalleMetrica = async function (request, response) {
    const { id } = request.params;
    const metrica = await findById(id);
    response.status(200).json(metrica);
};

exports.crearMetrica = async function (request, response) {
    const {
        circunferenciaCintura,
        presionArterial,
        imc,
        peso,
        altura,
        frecuenciaCardiaca,
        temperaturaCorporal,
        glucosaEnSangre,
        colesterolHDL,
        colesterolLDL,
        frecuenciaRespiratoria,
    } = request.body;
    const metrica = await insert({
        circunferenciaCintura,
        presionArterial,
        imc,
        peso,
        altura,
        frecuenciaCardiaca,
        temperaturaCorporal,
        glucosaEnSangre,
        colesterolHDL,
        colesterolLDL,
        frecuenciaRespiratoria,
        UsuarioId: request.user.id,
    });
    response.status(201).json(metrica);
};

exports.actualizarMetrica = async function (request, response) {
    const {
        circunferenciaCintura,
        presionArterial,
        imc,
        peso,
        altura,
        frecuenciaCardiaca,
        temperaturaCorporal,
        glucosaEnSangre,
        colesterolHDL,
        colesterolLDL,
        frecuenciaRespiratoria,
    } = request.body;
    const { id } = request.params;

    await update(id, {
        circunferenciaCintura,
        presionArterial,
        imc,
        peso,
        altura,
        frecuenciaCardiaca,
        temperaturaCorporal,
        glucosaEnSangre,
        colesterolHDL,
        colesterolLDL,
        frecuenciaRespiratoria,
    });
    response.status(204).end();
};

exports.borrarMetrica = async function (request, response) {
    const { id } = request.params;
    await deleteById(id);
    response.status(204).end();
};
