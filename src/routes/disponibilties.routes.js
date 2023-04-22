const { Router } = require("express");
const disponibiltiesRouter = Router();

const {
    getAllDisponibiltiesHandler,
    getDisponibiltyByIdHandler,
    postDisponibiltyHandler,
    updatedDisponibiltyByIdHandler
} = require("../handlers");

disponibiltiesRouter.get("/", getAllDisponibiltiesHandler);
disponibiltiesRouter.get("/:disponibilty_id", getDisponibiltyByIdHandler);
disponibiltiesRouter.post("/", postDisponibiltyHandler);
disponibiltiesRouter.put("/:disponibilty_id", updatedDisponibiltyByIdHandler);

module.exports = disponibiltiesRouter;