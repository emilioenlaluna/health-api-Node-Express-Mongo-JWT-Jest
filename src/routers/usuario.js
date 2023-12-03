const express = require("express");
const router = express.Router();
const { crearUsuario, me } = require("../controllers/usuario");
const { crearUsuarioSchema } = require("../validations/usuarioSchema");
const validator = require("../middlewares/validator");
const jwtValidator = require("../middlewares/jwt");

router.post("/usuario", validator.body(crearUsuarioSchema), crearUsuario);
router.get("/me", jwtValidator, me)

module.exports = router;