const { Patient, Person } = require("../../db");
const postPatientGoogleController = require("../../controllers/patients/postPatientGoogle.controller");

const postSigninGoogleHandler = async (req, res) => {
  const { user_name, email, rol } = req.body;
  try {
    const patientPosted = await postPatientGoogleController(
      user_name,
      email,
      rol
    );

    const patient = await Patient.findOne({
      where: { person_id: patientPosted.id },
      include: [{ model: Person, attributes: ["id"] }],
    });

    return res.send({
      id: patient.id,
      user_name: patientPosted.user_name,
      first_name: patientPosted.first_name,
      email: patientPosted.email,
    });  

  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = postSigninGoogleHandler;
