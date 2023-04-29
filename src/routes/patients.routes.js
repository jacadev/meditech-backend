const { Router } = require('express');
const patientsRouter = Router();
const {
  getAllPatientsHandler,
  getPatientByNameHandler,
  getPatientByIdHandler,
  postSignupPatientHandler,
  updatePatientByIdHandler,
  deletePatientByIdHandler,
  postSigninHandler,
  postSigninGoogleHandler,
  updateProfileSettingsPatientByIdHandler,
  postForgotHandler,
  getAllAppointmentsOfPatientByIdHandler,
  postResetHandler
} = require('../handlers');

patientsRouter.get('/', getAllPatientsHandler);
patientsRouter.get('/name', getPatientByNameHandler);
patientsRouter.get('/:patient_id', getPatientByIdHandler);
patientsRouter.get('/appointments/:patient_id', getAllAppointmentsOfPatientByIdHandler);
patientsRouter.post('/', postSignupPatientHandler);
patientsRouter.put('/:patient_id', updatePatientByIdHandler);
patientsRouter.delete('/:patient_id', deletePatientByIdHandler);
patientsRouter.post('/signin', postSigninHandler);
patientsRouter.post("/signinGoogle", postSigninGoogleHandler)
patientsRouter.post("/forgotpassword", postForgotHandler)
patientsRouter.post("/resetpassword", postResetHandler)
patientsRouter.put('/profileSettings/:patient_id', updateProfileSettingsPatientByIdHandler);

module.exports = patientsRouter;
