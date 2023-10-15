const {
    findAll,
    findById,
    insert,
    update,
    deleteById,
} = require("../services/dietaComida");

exports.listarDietaComida = async function (request, response) {
    const dietaComida = await findAll();
    response.status(200).json(dietaComida);
};

exports.detalleDietaComida = async function (request, response) {
    const { id } = request.params;
    const dietaComida = await findById(id);
    response.status(200).json(dietaComida);
};

exports.crearDietaComida = async function (request, response) {
    const {
        horaIngesta,
        porciones,
        cantidad,
        dietaId, // Relaciona con Dieta
        comidaId, // Relaciona con Comida
    } = request.body;
    const dietaComida = await insert({
        horaIngesta,
        porciones,
        cantidad,
        dietaId,
        comidaId,
    });
    response.status(201).json(dietaComida);
};

exports.actualizarDietaComida = async function (request, response) {
    const {
        horaIngesta,
        porciones,
        cantidad,
        dietaId,
        comidaId,
    } = request.body;
    const { id } = request.params;

    await update(id, {
        horaIngesta,
        porciones,
        cantidad,
        dietaId,
        comidaId,
    });
    response.status(204).end();
};

exports.borrarDietaComida = async function (request, response) {
    const { id } = request.params;
    await deleteById(id);
    response.status(204).end();
};
