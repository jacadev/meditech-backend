const { Router } = require("express");
const disponibiltiesRouter = Router();

const {
    getAllDisponibiltiesHandler,
    postDisponibiltyHandler,
    updatedDisponibiltyByIdHandler
} = require("../handlers");

disponibiltiesRouter.get("/", getAllDisponibiltiesHandler);
disponibiltiesRouter.post("/", postDisponibiltyHandler);
disponibiltiesRouter.put("/:disponibilty_id", updatedDisponibiltyByIdHandler);

module.exports = disponibiltiesRouter;