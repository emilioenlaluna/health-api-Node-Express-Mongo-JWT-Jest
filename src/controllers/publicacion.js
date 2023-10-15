const {
    findAll,
    findById,
    insert,
    update,
    deleteById,
} = require("../services/publicacion");

exports.listarPublicaciones = async function (request, response) {
    const publicaciones = await findAll();
    response.status(200).json(publicaciones);
};

exports.detallePublicacion = async function (request, response) {
    const { id } = request.params;
    const publicacion = await findById(id);
    response.status(200).json(publicacion);
};

exports.crearPublicacion = async function (request, response) {
    const {
        titulo,
        contenido,
        likes,
        imagen,
        isActive,
        fechaCreacion,
    } = request.body;
    const publicacion = await insert({
        titulo,
        contenido,
        likes,
        imagen,
        isActive,
        fechaCreacion,
    });
    response.status(201).json(publicacion);
};

exports.actualizarPublicacion = async function (request, response) {
    const {
        titulo,
        contenido,
        likes,
        imagen,
        isActive,
        fechaCreacion,
    } = request.body;
    const { id } = request.params;

    await update(id, {
        titulo,
        contenido,
        likes,
        imagen,
        isActive,
        fechaCreacion,
    });
    response.status(204).end();
};

exports.borrarPublicacion = async function (request, response) {
    const { id } = request.params;
    await deleteById(id);
    response.status(204).end();
};
