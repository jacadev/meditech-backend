const { Patient, Person } = require("../../db");
const postPatientGoogleController = require("../../controllers/patients/postPatientGoogle.controller");

const sendMail = require("../../mailer/sendMail.mailer");
const signupMessageHtml = require("../../mailer/templates/signupMessage.template");

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

    res.send({
      id: patient.id,
      user_name: patientPosted.user_name,
      first_name: patientPosted.first_name,
      email: patientPosted.email,
    });

    let mailInfo = {
      firstName: patientPosted.user_name,
      email: patientPosted.email,
      fullName: patientPosted.user_name,
      subject: "¡Bienvenido a Meditech!",
    };

    await sendMail(mailInfo, signupMessageHtml);

  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = postSigninGoogleHandler;
