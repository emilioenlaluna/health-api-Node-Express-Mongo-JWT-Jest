const express = require("express");
const router = express.Router();
const {
	listarActividades,
	detalleActividad,
	detalleActividadUsuario,
	crearActividad,
	actualizarActividad,
    borrarActividad
} = require("../controllers/actividad");
const validator = require("../middlewares/validator");
const jwtValidator = require("../middlewares/jwt");
const {
	paramsSchema,
} = require("../validations/params");
const {
	actividadSchema,
} = require("../validations/actividadSchema");

router.get("/", jwtValidator,listarActividades,);
router.get("/:id", jwtValidator,validator.params(paramsSchema), detalleActividad);
router.get("/usuario/:id", validator.params(paramsSchema), detalleActividadUsuario);
router.post(
	"/",
	jwtValidator,
	validator.body(actividadSchema),
	crearActividad
);
router.put(
	"/:id",
	jwtValidator,
	validator.params(paramsSchema),
	validator.body(actividadSchema),
	actualizarActividad
);
router.delete(
	"/:id",
	jwtValidator,
	validator.params(paramsSchema),
	borrarActividad
);

module.exports = router;