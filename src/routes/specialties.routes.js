const { Router } = require("express");
const specialtiesRouter = Router();
const {
  getAllSpecialtiesHandler,
  postSpecialtieHandler,
  updateSpecialtieByIdHandler,
} = require("../handlers");

specialtiesRouter.get("/", getAllSpecialtiesHandler);
specialtiesRouter.post("/", postSpecialtieHandler);
specialtiesRouter.put("/:specialty_id", updateSpecialtieByIdHandler);

module.exports = specialtiesRouter;
