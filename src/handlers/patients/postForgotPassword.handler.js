const bcrypt = require('bcrypt');
const { Person } = require('../../db');
const nodemailer = require('nodemailer');


const postForgotHandler = async (req, res) => {
  try {
    const user = await Person.findOne({ where: { email: req.body.email } });

    if (user) {
      const recoveryCode = Math.floor(Math.random() * 9000 + 1000);
      const expirationTime = Date.now() + 60 * 60 * 1000;
      let transporter = nodemailer.createTransport({
        host: 'smtp-relay.sendinblue.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'jesus@etereoworks.com', // generated ethereal user
          pass: '8dxgbp0KIPJNQTCq', // generated ethereal password
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      const mailOptions = {
        from: '"Meditech" <notificaciones@meditech-app.com>', // sender address
        to: user.email, // list of receivers
        subject: 'Código de recuperación de contraseña', // Subject line
        text: `Tu código de recuperación de contraseña es:  ${recoveryCode}, ${expirationTime}`,
      };

      await transporter.sendMail(mailOptions);

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
      res.status(200).send({
        message:
          'Se ha enviado un código de recuperación a su correo electrónico',
      });
    } else {
      res.status(401).send({ message: 'Correo electrónico inválido' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Ha ocurrido un error en el servidor' });
  }
};

module.exports = postForgotHandler;
