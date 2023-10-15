const express = require("express");
const router = express.Router();
const {
    listarDietas,
    detalleDieta,
    crearDieta,
    actualizarDieta,
    borrarDieta
} = require("../controllers/dieta");
const validator = require("../middlewares/validator");
const jwtValidator = require("../middlewares/jwt");
const {
    paramsSchema,
} = require("../validations/params");
const {
    dietaSchema,
} = require("../validations/dietaSchema");

router.get("/", jwtValidator, listarDietas);
router.get("/:id", jwtValidator, validator.params(paramsSchema), detalleDieta);
router.post("/", jwtValidator, validator.body(dietaSchema), crearDieta);
router.put("/:id", jwtValidator, validator.params(paramsSchema), validator.body(dietaSchema), actualizarDieta);
router.delete("/:id", jwtValidator, validator.params(paramsSchema), borrarDieta);

module.exports = router;
