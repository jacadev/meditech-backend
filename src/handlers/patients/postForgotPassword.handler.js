const bcrypt = require('bcrypt');
const { Person } = require('../../db');
const { sendRecoveryCode } = require('../../mailer/sendMail.mailer');
const { generateRecoveryCode } = require('../../helpers/utils.herlper');

const postForgotHandler = async (req, res) => {
  const user = await Person.findOne({ where: { email: req.body.email } });
  const recoveryCode = generateRecoveryCode();
  if (user) {
    sendRecoveryCode(user, recoveryCode);
  }
  res.status(401).send({ message: 'Correo electrónico inválido' });
};

module.exports = postForgotHandler;
