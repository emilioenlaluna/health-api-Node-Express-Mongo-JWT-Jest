const express = require("express");
const router = express.Router();
const {
    listarComunidades,
    detalleComunidad,
    crearComunidad,
    actualizarComunidad,
    borrarComunidad
} = require("../controllers/comunidad");
const validator = require("../middlewares/validator");
const jwtValidator = require("../middlewares/jwt");
const {
    paramsSchema,
} = require("../validations/params");
const {
    comunidadSchema,
} = require("../validations/comunidadSchema");

router.get("/", jwtValidator, listarComunidades);
router.get("/:id", jwtValidator, validator.params(paramsSchema), detalleComunidad);
router.post("/", jwtValidator, validator.body(comunidadSchema), crearComunidad);
router.put("/:id", jwtValidator, validator.params(paramsSchema), validator.body(comunidadSchema), actualizarComunidad);
router.delete("/:id", jwtValidator, validator.params(paramsSchema), borrarComunidad);

module.exports = router;
