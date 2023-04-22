const { Router } = require("express");
const appointmentsRouter = Router();

const {
    getAllAppointmentsHandler,
    getAppointmentByIdHandler,
    postAppointmentHandler
} = require("../handlers");

appointmentsRouter.get("/", getAllAppointmentsHandler);
appointmentsRouter.get("/:appointment_id", getAppointmentByIdHandler);
appointmentsRouter.post("/", postAppointmentHandler);

module.exports = appointmentsRouter;