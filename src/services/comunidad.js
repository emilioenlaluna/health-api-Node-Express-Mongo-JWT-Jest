const Comunidad = require("../models/comunidad");

exports.findAll = function () {
	return Comunidad.findAll();
};

exports.findById = function (id) {
	return Comunidad.findByPk(id);
};

exports.insert = function (data) {
	return Comunidad.create(data);
};

exports.update = async function (id, data) {
	await Comunidad.update(data, {
		where: {
			id,
		},
	});
};

exports.deleteById = async function (id) {
	const post = await Comunidad.findByPk(id);
	await post.destroy();
};

const UsuarioComunidad = require('./models/UsuarioComunidad'); // Asegúrate de importar el modelo de UsuarioComunidad

exports.findAllMembers = function (comunidadId) {
  return UsuarioComunidad.findAll({
    where: { comunidadId }, // Filtrar por la comunidad deseada
    include: {
      model: Usuario, // Incluir la información del usuario
      as: 'Miembro', // Asegúrate de usar el alias correcto definido en la relación many-to-many
    },
  });
};

exports.findMemberById = function (id) {
  return UsuarioComunidad.findByPk(id, {
    include: {
      model: Usuario, // Incluir la información del usuario
      as: 'Miembro', // Asegúrate de usar el alias correcto definido en la relación many-to-many
    },
  });
};