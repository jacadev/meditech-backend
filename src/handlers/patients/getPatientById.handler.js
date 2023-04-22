const { getPatientByIdController } = require('../../controllers');

const getPatientByIdHandler = async (req, res) => {
  const { patient_id } = req.params;
  try {
    const patientById = await getPatientByIdController(patient_id);
    return res.status(201).json(patientById);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = getPatientByIdHandler;