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
const postPatientHandler = require('./patients/postPatient.handler');
const updatePatientByIdHandler = require('./patients/updatePatientById.handler');
const deletePatientByIdHandler = require('./patients/deletePatientById.handler');

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
  postPatientHandler,
  updatePatientByIdHandler,
  deletePatientByIdHandler
}