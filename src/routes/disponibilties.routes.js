const { Router } = require("express");
const disponibiltiesRouter = Router();

const {
    getAllDisponibiltiesHandler,
    postDisponibiltyHandler
} = require("../handlers");

disponibiltiesRouter.get("/", getAllDisponibiltiesHandler);
disponibiltiesRouter.post("/", postDisponibiltyHandler);

module.exports = disponibiltiesRouter;