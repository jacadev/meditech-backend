const { Router } = require("express");
const payRouter = Router();

const {
    postPayHandler,
    getPayHandler
} = require("../handlers");

// appointmentsRouter.get("/", getAllAppointmentsHandler);
payRouter.post("/", postPayHandler);
payRouter.get("/", getPayHandler);

module.exports = payRouter;