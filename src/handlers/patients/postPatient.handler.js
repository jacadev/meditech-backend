const { postPatientController } = require('../../controllers');
const bcrypt = require('bcrypt');

const postPatientHandler = async (req, res) => {
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
    res.status(201).json(patientPosted);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = postPatientHandler;
