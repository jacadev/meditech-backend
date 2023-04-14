const { Router } = require("express");
const mainRouter = Router();
const doctorsRouter = require("./doctors.routes");
const patientsRouter = require("./patients.routes");
const specialtiesRouter = require("./specialties.routes")

mainRouter.use("/doctors", doctorsRouter);
mainRouter.use("/patients", patientsRouter);
mainRouter.use("/specialties", specialtiesRouter);

module.exports = mainRouter;