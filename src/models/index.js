const doctorModel = require("./doctor.model");
const patientModel = require("./patient.model");
const specialtyModel = require("./specialty.model");
const doctorSpecialtyModel = require("./doctorSpecialty.model");
const reviewModel = require("./review.model");
const appointmentModel = require("./appointment.model");

module.exports = {
  doctorModel,
  patientModel,
  doctorSpecialtyModel,
  specialtyModel,
  reviewModel,
  appointmentModel,
};