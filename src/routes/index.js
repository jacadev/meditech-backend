const { Router } = require("express");
const mainRouter = Router();
const doctorsRouter = require("./doctors.routes");
const patientsRouter = require("./patients.routes");
const specialtiesRouter = require("./specialties.routes")
const citasRouter = require("./cita.routes");
const reviewsRouter = require("./reviews.routes");
const appointmentsRouter = require("./appointments.routes");
const disponibiltiesRouter = require("./disponibilties.routes");
const daysRouter = require("./days.routes");
const timetablesRouter = require("./timetables.routes");

mainRouter.use("/doctors", doctorsRouter);
mainRouter.use("/patients", patientsRouter);
mainRouter.use("/specialties", specialtiesRouter);
mainRouter.use("/citas", citasRouter);
mainRouter.use("/reviews", reviewsRouter);
mainRouter.use("/appointments", appointmentsRouter);
mainRouter.use("/disponibilties", disponibiltiesRouter);
mainRouter.use("/days", daysRouter);
mainRouter.use("/timetables", timetablesRouter);


module.exports = mainRouter;