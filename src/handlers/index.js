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
const postSigninGoogleHandler = require('./patients/postSigninGoogle.handler');
const updateProfileSettingsPatientByIdHandler = require("./patients/updateProfileSettingsPatientById.handler")
const postForgotHandler = require("./patients/postForgotPassword.handler")
const getAllAppointmentsOfPatientByIdHandler = require("./patients/getAllAppointmentsOfPatientById.handler");
const postResetHandler = require("./patients/postResetPassword.handler")
const getAllReviewsOfPatientByIdHandler = require("./patients/getAllReviewsOfPatientById.handler");

// Specialty handlers
const getAllSpecialtiesHandler = require('./specialties/getAllSpecialties.handler');
const postSpecialtieHandler = require('./specialties/postSpecialtie.handler');
const updateSpecialtieByIdHandler = require('./specialties/updateSpecialtieById.handler');

// Review handlers
const getAllReviewsHandler = require('./reviews/getAllReviews.handler');
const getReviewByIdHandler = require('./reviews/getReviewById.handler');
const postReviewHandler = require('./reviews/postReview.handler');
const updateReviewByIdHandler = require('./reviews/updateReviewById.handler');

// Appointment handlers
const getAllAppointmentsHandler = require('./appointments/getAllAppointments.handler');
const getAppointmentByIdHandler = require('./appointments/getAppointmentById.handler');
const postAppointmentHandler = require('./appointments/postAppointment.handler');
const updateAppointmentByIdHandler = require('./appointments/updateAppointmentById.handler');

// Disponibilty handlers
const getAllDisponibiltiesHandler = require('./disponibilties/getAllDisponibilties.handler');
const getDisponibiltyByIdHandler = require('./disponibilties/getDisponibiltyById.handler');
const postDisponibiltyHandler = require('./disponibilties/postDisponibilty.handler');
const updatedDisponibiltyByIdHandler = require('./disponibilties/updatedDisponibiltyById.handler');

// Day handlers
const getAllDaysHandler = require('./days/getAllDays.handler');
const postDayHandler = require('./days/postDay.handler');
const updateDayByIdHandler = require('./days/updateDayById.handler');

// Timetable handlers
const getAllTimetablesHandler = require('./timetables/getAllTimetables.handler');
const postTimetableHandler = require('./timetables/postTimetable.handler');
const updateTimetableByIdHandler = require('./timetables/updateTimetableById.handler');

// Pay handlers
const postPayHandler = require('./pay/postPay.handler');
const getPayHandler = require('./pay/getPay.handler');
const getPayByIdHandler = require('./pay/getPayById.handler');

// Person handlers
const getPersonByNameHandler = require("./persons/getPersonByName.handler");

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
  getAllReviewsHandler,
  getReviewByIdHandler,
  postReviewHandler,
  updateReviewByIdHandler,
  postSigninHandler,
  getAllAppointmentsHandler,
  getAppointmentByIdHandler,
  postAppointmentHandler,
  updateAppointmentByIdHandler,
  getAllDisponibiltiesHandler,
  getDisponibiltyByIdHandler,
  postDisponibiltyHandler,
  updatedDisponibiltyByIdHandler,
  getAllDaysHandler,
  postDayHandler,
  updateDayByIdHandler,
  getAllTimetablesHandler,
  postTimetableHandler,
  updateTimetableByIdHandler,
  postPayHandler,
  getPayHandler,
  getPayByIdHandler,
  postSigninGoogleHandler,
  updateProfileSettingsPatientByIdHandler,
  postForgotHandler,
  getAllAppointmentsOfPatientByIdHandler,
  postResetHandler,
  getAllReviewsOfPatientByIdHandler,
  getPersonByNameHandler
};
