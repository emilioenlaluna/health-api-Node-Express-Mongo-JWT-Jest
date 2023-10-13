const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/usuario");
const { crearUsuarioSchema } = require("../validations/usuario");
const validator = require("../middlewares/validator");

router.post("/users", validator.body(crearUsuarioSchema), createUser);

module.exports = router;