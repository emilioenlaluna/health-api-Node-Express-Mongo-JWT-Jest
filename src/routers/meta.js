const express = require("express");
const router = express.Router();
const {
    listarMetas,
    detalleMeta,
    crearMeta,
    actualizarMeta,
    borrarMeta
} = require("../controllers/meta");
const validator = require("../middlewares/validator");
const jwtValidator = require("../middlewares/jwt");
const {
    paramsSchema,
} = require("../validations/params");
const {
    metaSchema,
} = require("../validations/metaSchema");

router.get("/", jwtValidator, listarMetas);
router.get("/:id", jwtValidator, validator.params(paramsSchema), detalleMeta);
router.post("/", jwtValidator, validator.body(metaSchema), crearMeta);
router.put("/:id", jwtValidator, validator.params(paramsSchema), validator.body(metaSchema), actualizarMeta);
router.delete("/:id", jwtValidator, validator.params(paramsSchema), borrarMeta);

module.exports = router;
