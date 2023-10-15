const express = require("express");
const router = express.Router();
const {
    listarAlertas,
    detalleAlerta,
    crearAlerta,
    actualizarAlerta,
    borrarAlerta
} = require("../controllers/alerta");
const validator = require("../middlewares/validator");
const jwtValidator = require("../middlewares/jwt");
const {
    paramsSchema,
} = require("../validations/params");
const {
    alertaSchema,
} = require("../validations/alertaSchema");

router.get("/", jwtValidator, listarAlertas);
router.get("/:id", jwtValidator, validator.params(paramsSchema), detalleAlerta);
router.post("/", jwtValidator, validator.body(alertaSchema), crearAlerta);
router.put("/:id", jwtValidator, validator.params(paramsSchema), validator.body(alertaSchema), actualizarAlerta);
router.delete("/:id", jwtValidator, validator.params(paramsSchema), borrarAlerta);

module.exports = router;
