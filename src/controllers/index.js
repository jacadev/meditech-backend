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
const updateProfileSettingsPatientByIdController = require("./patients/updateProfileSettingsPatientById.controller")
const getAllAppointmentsOfPatientByIdController = require("./patients/getAllAppointmentsOfPatientById.controller");
const getAllReviewsOfPatientByIdController = require("./patients/getAllReviewsOfPatientById.controller");

// Specialty Controller
const getAllSpecialtiesController = require("./specialties/getAllSpecialties.controller");
const postSpecialtieController = require("./specialties/postSpecialtie.controller");
const updateSpecialtieByIdController = require("./specialties/updateSpecialtieById.controller");

// Review Controller
const getAllReviewsController = require("./reviews/getAllReviews.controller");
const getReviewByIdController = require("./reviews/getReviewById.controller");
const postReviewController = require("./reviews/postReview.controller");
const updateReviewByIdController = require("./reviews/updateReviewById.controller");

// Appointment Controller
const getAllAppointmentsController = require("./appointments/getAllAppointments.controller");
const getAppointmentByIdController = require("./appointments/getAppointmentById.controller");
const postAppointmentController = require("./appointments/postAppointment.controller");
const updateAppointmentByIdController = require("./appointments/updateAppointmentById.controller");

// Disponibilty Controller
const getAllDisponibiltiesController = require("./disponibilties/getAllDisponibilties.controller");
const getDisponibiltyByIdController = require("./disponibilties/getDisponibiltyById.controller");
const postDisponibiltyController = require("./disponibilties/postDisponibilty.controller");
const updatedDisponibiltyByIdController = require("./disponibilties/updateDisponibiltyById.controller");

// Day Controller
const getAllDaysController = require("./days/getAllDays.controller");
const postDayController = require("./days/postDay.controller");
const updateDayByIdController = require("./days/updateDayById.controller");

// Timetable Controller
const getAllTimetablesController = require("./timetables/getAllTimetables.controller");
const postTimetableController = require("./timetables/postTimetable.controller");
const updateTimetableByIdController = require("./timetables/updateDayById.controller");

// Pay controller
const postPayController = require('./pay/postPay.controller');
const getAllPayController = require('./pay/getPay.controller');
const getPayByIdController = require('./pay/getPayById.controller');

// Person Controller
const   getPersonByNameController = require("./persons/getPersonByName.controller");

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
  getAllSpecialtiesController,
  postSpecialtieController,
  updateSpecialtieByIdController,
  getAllReviewsController,
  getReviewByIdController,
  postReviewController,
  updateReviewByIdController,
  getAllAppointmentsController,
  getAppointmentByIdController,
  postAppointmentController,
  updateAppointmentByIdController,
  getAllDisponibiltiesController,
  getDisponibiltyByIdController,
  postDisponibiltyController,
  updatedDisponibiltyByIdController,
  getAllDaysController,
  postDayController,
  updateDayByIdController,
  getAllTimetablesController,
  postTimetableController,
  updateTimetableByIdController,
  postPayController,
  getAllPayController,
  getPayByIdController,
  updateProfileSettingsPatientByIdController,
  getAllAppointmentsOfPatientByIdController,
  getPersonByNameController,
  getAllReviewsOfPatientByIdController
};