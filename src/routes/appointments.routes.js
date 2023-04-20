const { Router } = require("express");
const appointmentsRouter = Router();

const {
    getAllAppointmentsHandler,
    postAppointmentHandler
} = require("../handlers");

appointmentsRouter.get("/", getAllAppointmentsHandler);
appointmentsRouter.post("/", postAppointmentHandler);

module.exports = appointmentsRouter;