const { Router } = require("express");
const mainRouter = Router();
const doctorsRouter = require("../routes/doctors.routes");
const patientsRouter = require("../routes/patients.routes");

mainRouter.use("/doctors", doctorsRouter);
mainRouter.use("/patients", patientsRouter);

module.exports = mainRouter;