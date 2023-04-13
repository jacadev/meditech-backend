const { Router } = require("express");
const patientsRouter = Router();
const {
  getAllPatientsHandler,
  getPatientByNameHandler,
  getPatientByIdHandler,
  postPatientHandler,
  updatePatientByIdHandler,
  deletePatientByIdHandler
} = require("../handlers");

patientsRouter.get("/", getAllPatientsHandler);
patientsRouter.get("/:name", getPatientByNameHandler);
patientsRouter.get("/:patient_id", getPatientByIdHandler);
patientsRouter.post("/", postPatientHandler);
patientsRouter.put("/:patient_id", updatePatientByIdHandler);
patientsRouter.delete("/:patient_id", deletePatientByIdHandler);

module.exports = patientsRouter;
