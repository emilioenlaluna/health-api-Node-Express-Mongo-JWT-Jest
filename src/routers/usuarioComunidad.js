const express = require("express");
const router = express.Router();
const {
    listarUsuarioComunidades,
    detalleUsuarioComunidad,
    crearUsuarioComunidad,
    actualizarUsuarioComunidad,
    borrarUsuarioComunidad
} = require("../controllers/usuarioComunidad");
const validator = require("../middlewares/validator");
const jwtValidator = require("../middlewares/jwt");
const {
    paramsSchema,
} = require("../validations/params");
const {
    usuarioComunidadSchema,
} = require("../validations/usuarioComunidadSchema");

router.get("/", jwtValidator, listarUsuarioComunidades);
router.get("/:id", jwtValidator, validator.params(paramsSchema), detalleUsuarioComunidad);
router.post("/", jwtValidator, validator.body(usuarioComunidadSchema), crearUsuarioComunidad);
router.put("/:id", jwtValidator, validator.params(paramsSchema), validator.body(usuarioComunidadSchema), actualizarUsuarioComunidad);
router.delete("/:id", jwtValidator, validator.params(paramsSchema), borrarUsuarioComunidad);

module.exports = router;
