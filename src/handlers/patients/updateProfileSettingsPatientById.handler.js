const { updateProfileSettingsPatientByIdController } = require("../../controllers");
const { generateToken } = require("../../helpers/utils.herlper");


const updateProfileSettingsPatientByIdHandler = async (req, res) => {
  const { patient_id } = req.params;
  const { user_name, email, password, phone } = req.body;
  
  try {
    const patientById = await updateProfileSettingsPatientByIdController(
      patient_id,
      user_name,
      email,
      password,
      phone
    );
    
    res.send({
      id: patientById.patient_id,
      user_name: patientById.userName,
      email: patientById.email,
      token: generateToken(patientById),
    });

  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = updateProfileSettingsPatientByIdHandler;




