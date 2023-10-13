const express = require("express");
const router = express.Router();
const { crearUsuario } = require("../controllers/usuario");
const { crearUsuarioSchema } = require("../validations/usuarioSchema");
const validator = require("../middlewares/validator");

router.post("/usuario", validator.body(crearUsuarioSchema), crearUsuario);


module.exports = router;