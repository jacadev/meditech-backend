const { Router } = require("express");
const payRouter = Router();

const {
    postPayHandler,
    getPayHandler,
    getPayByIdHandler
} = require("../handlers");

// appointmentsRouter.get("/", getAllAppointmentsHandler);
payRouter.post("/", postPayHandler);
payRouter.get("/", getPayHandler);
payRouter.get("/pay_id", getPayByIdHandler);

module.exports = payRouter;