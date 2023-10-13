
const Metrica = require("../models/metrica");

exports.findComunidad = function (idComunidad) {
	
	return Usuario.findAll({
		where: {
			idComunidad,
		},
	});
};


exports.insert = function (data) {
	return Metrica.create(data);
};

exports.update = async function (id, data) {
	await Metrica.update(data, {
		where: {
			id,
		},
	});
};
