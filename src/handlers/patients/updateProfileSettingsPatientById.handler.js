const { updateProfileSettingsPatientByIdController } = require('../../controllers');

const updateProfileSettingsPatientByIdHandler = async (req, res) => {
  const { patient_id } = req.params;
  const {user_name,email, password,  phone} = req.body;
  try {
    const patientById = await updateProfileSettingsPatientByIdController(patient_id, user_name, email, password,  phone);
    return res.status(200).json(patientById);
    // return res.status(201).send('Paciente actualizado con éxito');
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = updateProfileSettingsPatientByIdHandler;