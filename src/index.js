require("dotenv").config();

const { initDatabase } = require("./db");
initDatabase();

const express = require("express");
const app = express();

app.use(express.json());


const actividadRouter = require("./routers/actividad");
const alertaRouter = require("./routers/alerta");
const authRouter = require("./routers/auth");
const comidaRouter=require("./routers/comida");
const comunidadRouter=require("./routers/comunidad");
const dietaRouter=require("./routers/dieta");
const ejercicioRouter=require("./routers/ejercicio");
const historialRouter=require("./routers/historial");
const metaRouter=require("./routers/meta");
const metricaRouter=require("./routers/metrica");
const userRouter = require("./routers/usuario");
const userComunidadRouter = require("./routers/usuarioComunidad");

const validationError = require("./middlewares/validation-error");
const unknownError = require("./middlewares/unknown-error");

// Rutas


app.use("/actividad",actividadRouter);
app.use("/alerta",alertaRouter);
app.use("/auth",authRouter);
app.use("/comida",comidaRouter);
app.use("/comunidad",comunidadRouter);
app.use("/dieta",dietaRouter);
app.use("/ejercicio",ejercicioRouter);
app.use("/historial",historialRouter);
app.use("/meta",metaRouter);
app.use("/metrica",metricaRouter);
app.use("/usuarios",userRouter);
app.use("/usuariocomunidad",userComunidadRouter);



// Manejo de errores
app.use(validationError);
app.use(unknownError);

app.listen(process.env.SERVER_PORT, function () {
	console.log("> Escuchando puerto " + process.env.SERVER_PORT);
});