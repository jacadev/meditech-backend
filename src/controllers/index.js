// Doctor Controllers
const getAllDoctorsController = require("./doctors/getAllDoctors.controller");
const getDoctorByNameController = require("./doctors/getDoctorByName.controller");
const getDoctorByIdController = require("./doctors/getDoctorById.controller");
const postDoctorController = require("./doctors/postDoctor.controller");
const updateDoctorByIdController = require("./doctors/updateDoctorById.controller");
const deleteDoctorByIdController = require("./doctors/deleteDoctorById.controller");

// Patient Controller
const getAllPatientsController = require("./patients/getAllPatients.controller");
const getPatientByNameController = require("./patients/getPatientByName.controller");
const getPatientByIdController = require("./patients/getPatientById.controller");
const postPatientController = require("./patients/postPatient.controller");
const updatePatientByIdController = require("./patients/updatePatientById.controller");
const deletePatientByIdController = require("./patients/deletePatientById.controller");

// Specialty Controller
const getAllSpecialtiesController = require("./specialties/getAllSpecialties.controller");
const postSpecialtieController = require("./specialties/postSpecialtie.controller");
const updateSpecialtieByIdController = require("./specialties/updateSpecialtieById.controller");

module.exports = {
  getAllDoctorsController,
  getDoctorByNameController,
  getDoctorByIdController,
  postDoctorController,
  updateDoctorByIdController,
  deleteDoctorByIdController,
  getAllPatientsController,
  getPatientByNameController,
  getPatientByIdController,
  postPatientController,
  updatePatientByIdController,
  deletePatientByIdController,
  getAllSpecialtiesController,
  postSpecialtieController,
  updateSpecialtieByIdController
};