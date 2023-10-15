const express = require("express");
const router = express.Router();
const {
    listarMetricas,
    detalleMetrica,
    crearMetrica,
    actualizarMetrica,
    borrarMetrica
} = require("../controllers/metrica");
const validator = require("../middlewares/validator");
const jwtValidator = require("../middlewares/jwt");
const {
    paramsSchema,
} = require("../validations/params");
const {
    metricaSchema,
} = require("../validations/metricaSchema");

router.get("/", jwtValidator, listarMetricas);
router.get("/:id", jwtValidator, validator.params(paramsSchema), detalleMetrica);
router.post("/", jwtValidator, validator.body(metricaSchema), crearMetrica);
router.put("/:id", jwtValidator, validator.params(paramsSchema), validator.body(metricaSchema), actualizarMetrica);
router.delete("/:id", jwtValidator, validator.params(paramsSchema), borrarMetrica);

module.exports = router;
