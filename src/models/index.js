const doctorModel = require("./doctor.model");
const patientModel = require("./patient.model");
const specialtyModel = require("./specialty.model");
const doctorSpecialtyModel = require("./doctorSpecialty.model");
const reviewModel = require("./review.model");
const appointmentModel = require("./appointment.model");
const personModel = require("./person.model");
const rolModel = require("./rol.model");
const citaModel = require("./cita.model");
const dayModel = require("./day.model");
const timetableModel = require("./timetable.model");

module.exports = {
  doctorModel,
  patientModel,
  doctorSpecialtyModel,
  specialtyModel,
  reviewModel,
  appointmentModel,
  personModel,
  rolModel,
  citaModel,
  dayModel,
  timetableModel
};