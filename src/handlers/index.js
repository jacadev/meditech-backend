// Doctor handlers
const getAllDoctorsHandler = require('./doctors/getAllDoctors.handler');
const getDoctorByNameHandler = require('./doctors/getDoctorByName.handler');
const getDoctorByIdHandler = require('./doctors/getDoctorById.handler');
const postDoctorHandler = require('./doctors/postDoctor.handler');
const updateDoctorByIdHandler = require('./doctors/updateDoctorById.handler');
const deleteDoctorByIdHandler = require('./doctors/deleteDoctorById.handler');

// Patient handlers
const getAllPatientsHandler = require('./patients/getAllPatients.handler');
const getPatientByNameHandler = require('./patients/getPatientByName.handler');
const getPatientByIdHandler = require('./patients/getPatientById.handler');
const postSignupPatientHandler = require('./patients/postSignupPatient.handler');
const updatePatientByIdHandler = require('./patients/updatePatientById.handler');
const deletePatientByIdHandler = require('./patients/deletePatientById.handler');
const postSigninHandler = require('./patients/postSignin.handler');


// Specialty handlers
const getAllSpecialtiesHandler = require('./specialties/getAllSpecialties.handler');
const postSpecialtieHandler = require('./specialties/postSpecialtie.handler');
const updateSpecialtieByIdHandler = require('./specialties/updateSpecialtieById.handler');

// Citas handlers
const getAllCitasHandler = require("./citas/getAllCitas.handler");
const postCitaHandler = require("./citas/postCita.handler");

// Review handlers
const getAllReviewsHandler = require("./reviews/getAllReviews.handler");
const postReviewHandler = require("./reviews/postReview.handler");

// Appointment handlers
const getAllAppointmentsHandler = require("./appointments/getAllAppointments.handler");
const postAppointmentHandler = require("./appointments/postAppointment.handler");

// Disponibilty handlers
const getAllDisponibiltiesHandler = require("./disponibilties/getAllDisponibilties.handler");
const postDisponibiltyHandler = require("./disponibilties/postDisponibilty.handler");

// Day handlers
const getAllDaysHandler = require("./days/getAllDays.handler");
const postDayHandler = require("./days/postDay.handler");
const updateDayByIdHandler = require("./days/updateDayById.handler");

// Timetable handlers
const getAllTimetablesHandler = require("./timetables/getAllTimetables.handler");
const postTimetableHandler = require("./timetables/postTimetable.handler");
const updateTimetableByIdHandler = require("./timetables/updateTimetableById.handler");

module.exports = {
  getAllDoctorsHandler,
  getDoctorByNameHandler,
  getDoctorByIdHandler,
  postDoctorHandler,
  updateDoctorByIdHandler,
  deleteDoctorByIdHandler,
  getAllPatientsHandler,
  getPatientByNameHandler,
  getPatientByIdHandler,
  postSignupPatientHandler,
  updatePatientByIdHandler,
  deletePatientByIdHandler,
  getAllSpecialtiesHandler,
  postSpecialtieHandler,
  updateSpecialtieByIdHandler,
  getAllCitasHandler,
  postCitaHandler,
  getAllReviewsHandler,
  postReviewHandler,
  postSigninHandler,
  getAllAppointmentsHandler,
  postAppointmentHandler,
  getAllDisponibiltiesHandler,
  postDisponibiltyHandler,
  getAllDaysHandler,
  postDayHandler,
  updateDayByIdHandler,
  getAllTimetablesHandler,
  postTimetableHandler,
  updateTimetableByIdHandler
}