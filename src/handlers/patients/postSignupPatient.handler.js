const { postPatientController } = require('../../controllers');
const bcrypt = require('bcrypt');
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
      user_name: patientPosted.user_name,
      email: patientPosted.email,
      token: generateToken(patientPosted),
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = postSigupPatientHandler;
