const Publicacion = require("../models/publicacion");

exports.findAll = function () {
	return Publicacion.findAll();
};

exports.findById = function (id) {
	return Publicacion.findByPk(id);
};

exports.insert = function (data) {
	return Publicacion.create(data);
};

exports.update = async function (id, data) {
	await Publicacion.update(data, {
		where: {
			id,
		},
	});
};

exports.findAllByCommunity = function (comunidadId) {
	return Publicacion.findAll({
	  where: {
		comunidadId, // Filtra las publicaciones por la comunidad específica
	  },
	});
  };

  exports.findByUser = function (usuarioId) {
	return Publicacion.findAll({
		where: {
			usuarioId,
		},
	});
};

exports.deleteById = async function (id) {
	const post = await Publicacion.findByPk(id);
	await post.destroy();
};