const { deletePatientByIdController } = require('../../controllers');

const deletePatientByIdHandler = async (req, res) => {
  const { patient_id } = req.params;
  const source = isNaN(patient_id) ? 'db' : 'api';
  try {
    const patientById = await deletePatientByIdController(patient_id, source);
    res.status(200).json(patientById);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = deletePatientByIdHandler;