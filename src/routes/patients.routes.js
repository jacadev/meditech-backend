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
} = require('../handlers');

patientsRouter.get('/', getAllPatientsHandler);
patientsRouter.get('/:name', getPatientByNameHandler);
patientsRouter.get('/:patient_id', getPatientByIdHandler);
patientsRouter.post('/', postSignupPatientHandler);
patientsRouter.put('/:patient_id', updatePatientByIdHandler);
patientsRouter.delete('/:patient_id', deletePatientByIdHandler);
patientsRouter.post('/signin', postSigninHandler);

module.exports = patientsRouter;
