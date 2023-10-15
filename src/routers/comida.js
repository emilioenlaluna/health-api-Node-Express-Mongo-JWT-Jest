const express = require("express");
const router = express.Router();
const {
    listarComidas,
    detalleComida,
    crearComida,
    actualizarComida,
    borrarComida
} = require("../controllers/comida");
const validator = require("../middlewares/validator");
const jwtValidator = require("../middlewares/jwt");
const {
    paramsSchema,
} = require("../validations/params");
const {
    comidaSchema,
} = require("../validations/comidaSchema");

router.get("/", jwtValidator, listarComidas);
router.get("/:id", jwtValidator, validator.params(paramsSchema), detalleComida);
router.post("/", jwtValidator, validator.body(comidaSchema), crearComida);
router.put("/:id", jwtValidator, validator.params(paramsSchema), validator.body(comidaSchema), actualizarComida);
router.delete("/:id", jwtValidator, validator.params(paramsSchema), borrarComida);

module.exports = router;
