// agregue cualquier cosa
const { Router } = require("express");
const doctorsRouter = Router();
const {
  getAllDoctorsHandler,
  getDoctorByNameHandler,
  getDoctorByIdHandler,
  postDoctorHandler,
  updateDoctorByIdHandler,
  deleteDoctorByIdHandler
} = require("../handlers");

doctorsRouter.get("/", getAllDoctorsHandler);
doctorsRouter.get("/:name", getDoctorByNameHandler);
doctorsRouter.get("/:doctor_id", getDoctorByIdHandler);
doctorsRouter.post("/", postDoctorHandler);
doctorsRouter.put("/:doctor_id", updateDoctorByIdHandler);
doctorsRouter.delete("/:doctor_id", deleteDoctorByIdHandler);

module.exports = doctorsRouter;
