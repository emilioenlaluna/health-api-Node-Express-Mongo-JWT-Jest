const {
    findAll,
    findById,
    insert,
    update,
    deleteById,
} = require("../services/comida");

exports.listarComidas = async function (request, response) {
    const comidas = await findAll();
    response.status(200).json(comidas);
};

exports.detalleComida = async function (request, response) {
    const { id } = request.params;
    const comida = await findById(id);
    response.status(200).json(comida);
};

exports.crearComida = async function (request, response) {
    const {
        nombre,
        descripcion,
        calorias,
        proteinas,
        carbohidratos,
        grasas,
        fibra,
        imagen,
    } = request.body;
    const comida = await insert({
        nombre,
        descripcion,
        calorias,
        proteinas,
        carbohidratos,
        grasas,
        fibra,
        imagen,
    });
    response.status(201).json(comida);
};

exports.actualizarComida = async function (request, response) {
    const {
        nombre,
        descripcion,
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
        calorias,
        proteinas,
        carbohidratos,
        grasas,
        fibra,
        imagen,
    });
    response.status(204).end();
};

exports.borrarComida = async function (request, response) {
    const { id } = request.params;
    await deleteById(id);
    response.status(204).end();
};
