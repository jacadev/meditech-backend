const { Router } = require('express');
const patientsRouter = Router();
const {
  getAllPatientsHandler,
  getPatientByNameHandler,
  getPatientByIdHandler,
  postSignupPatientHandler,
  updatePatientByIdHandler,
  postSigninHandler,
  postSigninGoogleHandler,
  updateProfileSettingsPatientByIdHandler,
  postForgotHandler,
  getAllAppointmentsOfPatientByIdHandler,
  postResetHandler,
  getAllReviewsOfPatientByIdHandler
} = require('../handlers');

patientsRouter.get('/', getAllPatientsHandler);
patientsRouter.get('/name', getPatientByNameHandler);
patientsRouter.get('/:patient_id', getPatientByIdHandler);
patientsRouter.get('/appointments/:patient_id', getAllAppointmentsOfPatientByIdHandler);
patientsRouter.get('/dates/:patient_id', getAllReviewsOfPatientByIdHandler)
patientsRouter.post('/', postSignupPatientHandler);
patientsRouter.put('/:patient_id', updatePatientByIdHandler);
patientsRouter.post('/signin', postSigninHandler);
patientsRouter.post("/signinGoogle", postSigninGoogleHandler)
patientsRouter.post("/forgotpassword", postForgotHandler)
patientsRouter.post("/resetpassword", postResetHandler)
patientsRouter.put('/profileSettings/:patient_id', updateProfileSettingsPatientByIdHandler);

module.exports = patientsRouter;
