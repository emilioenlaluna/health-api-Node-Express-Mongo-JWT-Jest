const express = require("express");
const router = express.Router();
const {
    listarHistoriales,
    detalleHistorial,
    crearHistorial,
    actualizarHistorial,
    borrarHistorial
} = require("../controllers/historial");
const validator = require("../middlewares/validator");
const jwtValidator = require("../middlewares/jwt");
const {
    paramsSchema,
} = require("../validations/params");
const {
    historialSchema,
} = require("../validations/historialSchema");

router.get("/", jwtValidator, listarHistoriales);
router.get("/:id", jwtValidator, validator.params(paramsSchema), detalleHistorial);
router.post("/", jwtValidator, validator.body(historialSchema), crearHistorial);
router.put("/:id", jwtValidator, validator.params(paramsSchema), validator.body(historialSchema), actualizarHistorial);
router.delete("/:id", jwtValidator, validator.params(paramsSchema), borrarHistorial);

module.exports = router;
