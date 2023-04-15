const { Router } = require("express");
const citasRouter = Router();

const {
    getAllCitasHandler,
    postCitaHandler
} = require("../handlers");

citasRouter.get('/', getAllCitasHandler);
citasRouter.post('/', postCitaHandler);

module.exports = citasRouter;