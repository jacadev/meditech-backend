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

// Review Controller
const getAllReviewsController = require("./reviews/getAllReviews.controller");
const postReviewController = require("./reviews/postReview.controller");

// Appointment Controller
const getAllAppointmentsController = require("./appointments/getAllAppointments.controller");
const postAppointmentController = require("./appointments/postAppointment.controller");

// Disponibilty Controller
const getAllDisponibiltiesController = require("./disponibilties/getAllDisponibilties.controller");
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

//Pay controller
const postPayController = require('./pay/postPay.controller');
const getAllPayController = require('./pay/getPay.controller');

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
  updateSpecialtieByIdController,
  getAllReviewsController,
  postReviewController,
  getAllAppointmentsController,
  postAppointmentController,
  getAllDisponibiltiesController,
  postDisponibiltyController,
  updatedDisponibiltyByIdController,
  getAllDaysController,
  postDayController,
  updateDayByIdController,
  getAllTimetablesController,
  postTimetableController,
  updateTimetableByIdController,
  postPayController,
  getAllPayController
};