const { Router } = require("express");
const appointmentsRouter = Router();

const {
    getAllAppointmentsHandler,
    getAppointmentByIdHandler,
    postAppointmentHandler,
    updateAppointmentByIdHandler
} = require("../handlers");

appointmentsRouter.get("/", getAllAppointmentsHandler);
appointmentsRouter.get("/:appointment_id", getAppointmentByIdHandler);
appointmentsRouter.post("/", postAppointmentHandler);
appointmentsRouter.put("/:appointment_id", updateAppointmentByIdHandler);

module.exports = appointmentsRouter;