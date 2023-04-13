const { updatePatientByIdController } = require('../../controllers');

const updatePatientByIdHandler = async (req, res) => {
  const { patient_id } = req.params;
  const source = isNaN(patient_id) ? 'db' : 'api';
  try {
    const patientById = await updatePatientByIdController(patient_id, source);
    res.status(200).json(patientById);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = updatePatientByIdHandler;