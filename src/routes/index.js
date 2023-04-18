const { Router } = require("express");
const mainRouter = Router();
const doctorsRouter = require("./doctors.routes");
const patientsRouter = require("./patients.routes");
const specialtiesRouter = require("./specialties.routes")
const citasRouter = require("./cita.routes");
const reviewsRouter = require("./reviews.routes");

mainRouter.use("/doctors", doctorsRouter);
mainRouter.use("/patients", patientsRouter);
mainRouter.use("/specialties", specialtiesRouter);
mainRouter.use("/citas", citasRouter);
mainRouter.use("/reviews", reviewsRouter);

module.exports = mainRouter;