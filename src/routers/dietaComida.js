const express = require("express");
const router = express.Router();
const {
    listarDietaComida,
    detalleDietaComida,
    crearDietaComida,
    actualizarDietaComida,
    borrarDietaComida
} = require("../controllers/dietaComida");
const validator = require("../middlewares/validator");
const jwtValidator = require("../middlewares/jwt");
const {
    paramsSchema,
} = require("../validations/params");
const {
    dietaComidaSchema,
} = require("../validations/dietaComidaSchema");

router.get("/", jwtValidator, listarDietaComida);
router.get("/:id", jwtValidator, validator.params(paramsSchema), detalleDietaComida);
router.post("/", jwtValidator, validator.body(dietaComidaSchema), crearDietaComida);
router.put("/:id", jwtValidator, validator.params(paramsSchema), validator.body(dietaComidaSchema), actualizarDietaComida);
router.delete("/:id", jwtValidator, validator.params(paramsSchema), borrarDietaComida);

module.exports = router;
