const { Person } = require("../../db");
const forgotPasswordHtml = require("../../mailer/templates/forgotPassword.handler");
const sendMail = require("../../mailer/sendMail.mailer");

const postForgotHandler = async (req, res) => {
  try {
    const user = await Person.findOne({ where: { email: req.body.email } });

    if (user) {
      const recoveryCode = Math.floor(Math.random() * 9000 + 1000);
      const expirationTime = Date.now() + 60 * 60 * 1000;

      const mailInfo = {
        firstName: user.firstName,
        email: user.email,
        fullName: user.firstName + " " + user.lastName,
        subject: "Código de recuperación de contraseña",
        recoveryCode: recoveryCode,
      };

      await sendMail(mailInfo, forgotPasswordHtml);

      // Verificar si el campo 'codigosRecuperacion' existe y es un array
      if (
        !user.codigosRecuperacion ||
        !Array.isArray(user.codigosRecuperacion)
      ) {
        user.codigosRecuperacion = [];
      }

      // Agregar el nuevo código de recuperación al campo 'codigosRecuperacion'
      user.codigosRecuperacion.push({ recoveryCode, expirationTime });

      await user.save();
      return res.status(200).send({
        message:
          `${user.userName}, se le ha enviado un código de recuperación a su correo electrónico,`
      });
    } else {
      return res.status(401).send({ message: "Correo electrónico inválido" });
    }
  } catch (error) {
    return res.status(500).send({ message: "Ha ocurrido un error en el servidor" });
  }
};

module.exports = postForgotHandler;
