const express = require("express");
const router = express.Router();
const {
    listarEjercicios,
    detalleEjercicio,
    crearEjercicio,
    actualizarEjercicio,
    borrarEjercicio
} = require("../controllers/ejercicio");
const validator = require("../middlewares/validator");
const jwtValidator = require("../middlewares/jwt");
const {
    paramsSchema,
} = require("../validations/params");
const {
    ejercicioSchema,
} = require("../validations/ejercicioSchema");

router.get("/", jwtValidator, listarEjercicios);
router.get("/:id", jwtValidator, validator.params(paramsSchema), detalleEjercicio);
router.post("/", jwtValidator, validator.body(ejercicioSchema), crearEjercicio);
router.put("/:id", jwtValidator, validator.params(paramsSchema), validator.body(ejercicioSchema), actualizarEjercicio);
router.delete("/:id", jwtValidator, validator.params(paramsSchema), borrarEjercicio);

module.exports = router;
