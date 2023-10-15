const express = require("express");
const router = express.Router();
const joiValidator = require("../middlewares/validator");
const { loginSchema } = require("../validations/authSchema");
const { login } = require("../controllers/auth");

router.post("/login", joiValidator.body(loginSchema), login);

module.exports = router;