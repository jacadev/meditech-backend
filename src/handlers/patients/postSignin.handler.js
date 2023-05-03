const bcrypt = require('bcrypt');
const { Person, Patient } = require('../../db');
const { generateToken } = require('../../helpers/utils.herlper');

const postSigninHandler = async (req, res) => {
  const user = await Person.findOne({ where: { email: req.body.email } });

  try {
    if (user && user.status === true) {
      const patient = await Patient.findOne({
        where: { person_id: user.id },
        include: [{ model: Person, attributes: ['id'] }],
      });

      if (bcrypt.compareSync(req.body.password, user.password)) {
        return res.send({
          id: patient.id,
          user_name: user.userName,
          email: user.email,
          rol: user.rol_id,
          token: generateToken(user),
        });
      }
    }
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

module.exports = postSigninHandler;
