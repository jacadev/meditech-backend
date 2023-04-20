const { updatePatientByIdController } = require('../../controllers');

const updatePatientByIdHandler = async (req, res) => {
  const { patient_id } = req.params;
  const {email, password, first_name, last_name, phone, gender, status} = req.body;
  try {
    const patientById = await updatePatientByIdController(patient_id, email, password, first_name, last_name, phone, gender, status);
    res.status(200).json(patientById);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = updatePatientByIdHandler;