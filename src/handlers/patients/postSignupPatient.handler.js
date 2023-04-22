const { postPatientController } = require('../../controllers');
const { generateToken } = require('../../helpers/utils.herlper');

const postSigupPatientHandler = async (req, res) => {
  const {
    user_name,
    email,
    password,
    first_name,
    last_name,
    phone,
    age,
    gender,
    rol,
  } = req.body;
  try {
    
    const patientPosted = await postPatientController(
      user_name,
      email,
      password,
      first_name,
      last_name,
      phone,
      age,
      gender,
      rol
    );
    res.send({
      id: patientPosted.id,
      user_name: patientPosted.userName,
      email: patientPosted.email,
      rol: patientPosted.rol_id,
      token: generateToken(patientPosted),
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = postSigupPatientHandler;
