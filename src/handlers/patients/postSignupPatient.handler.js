const { postPatientController } = require("../../controllers");
const { generateToken } = require("../../helpers/utils.herlper");
const sendMail = require("../../mailer/sendMail.mailer");
const signupMessageHtml = require("../../mailer/templates/signupMessage.template");
const { Patient, Person } = require('../../db');

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
    preload,
  } = req.body;
  try {
    // Verifica si el correo electrónico ya está registrado
    const existingPerson = await Person.findOne({ where: { email } });
    if (existingPerson) {
      throw new Error('El correo electrónico ya está en uso');
    }

    // Crea el registro del paciente
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

    const patient = await Patient.findOne({
      where: { person_id: patientPosted.id },
      include: [{ model: Person, attributes: ['id'] }],
    });

    res.send({
      id: patient.id,
      user_name: patientPosted.userName,
      email: patientPosted.email,
      rol: patientPosted.rol_id,
      token: generateToken(patientPosted),
    });

    // Envía el correo electrónico de bienvenida si preload es false
    if (preload === false) {
      let mailInfo = {
        firstName: patientPosted.firstName,
        email: patientPosted.email,
        fullName: patientPosted.firstName + " " + patientPosted.lastName,
        subject: "¡Bienvenido a Meditech!",
      };
      await sendMail(mailInfo, signupMessageHtml);
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
   
  }
};

module.exports = postSigupPatientHandler;


