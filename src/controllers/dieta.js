const {
    findAll,
    findById,
    insert,
    update,
    deleteById,
} = require("../services/dieta");

exports.listarDietas = async function (request, response) {
    const dietas = await findAll();
    response.status(200).json(dietas);
};

exports.detalleDieta = async function (request, response) {
    const { id } = request.params;
    const dieta = await findById(id);
    response.status(200).json(dieta);
};

exports.crearDieta = async function (request, response) {
    const {
        nombre,
        descripcion,
        tipoDieta,
        calorias,
        proteinas,
        carbohidratos,
        grasas,
        fibra,
        imagen,
    } = request.body;
    const dieta = await insert({
        nombre,
        descripcion,
        tipoDieta,
        calorias,
        proteinas,
        carbohidratos,
        grasas,
        fibra,
        imagen,
    });
    response.status(201).json(dieta);
};

exports.actualizarDieta = async function (request, response) {
    const {
        nombre,
        descripcion,
        tipoDieta,
        calorias,
        proteinas,
        carbohidratos,
        grasas,
        fibra,
        imagen,
    } = request.body;
    const { id } = request.params;

    await update(id, {
        nombre,
        descripcion,
        tipoDieta,
        calorias,
        proteinas,
        carbohidratos,
        grasas,
        fibra,
        imagen,
    });
    response.status(204).end();
};

exports.borrarDieta = async function (request, response) {
    const { id } = request.params;
    await deleteById(id);
    response.status(204).end();
};
