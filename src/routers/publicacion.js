const express = require("express");
const router = express.Router();
const {
    listarPublicaciones,
    detallePublicacion,
    crearPublicacion,
    actualizarPublicacion,
    borrarPublicacion
} = require("../controllers/publicacion");
const validator = require("../middlewares/validator");
const jwtValidator = require("../middlewares/jwt");
const {
    paramsSchema,
} = require("../validations/params");
const {
    publicacionSchema,
} = require("../validations/publicacionSchema");

router.get("/", jwtValidator, listarPublicaciones);
router.get("/:id", jwtValidator, validator.params(paramsSchema), detallePublicacion);
router.post("/", jwtValidator, validator.body(publicacionSchema), crearPublicacion);
router.put("/:id", jwtValidator, validator.params(paramsSchema), validator.body(publicacionSchema), actualizarPublicacion);
router.delete("/:id", jwtValidator, validator.params(paramsSchema), borrarPublicacion);

module.exports = router;
