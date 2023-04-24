const bcrypt = require('bcrypt');
const { Person, Patient } = require('../../db');
const { generateToken } = require('../../helpers/utils.herlper');

const postSigninHandler = async (req, res) => {
  const user = await Person.findOne({ where: { email: req.body.email } });
  const patient = await Patient.findOne({
    where: { person_id: user.id },
    include: [{ model: Person, attributes: ['id'] }],
  });
  if (user) {
    
    if (bcrypt.compareSync(req.body.password, user.password)) {
      res.send({
        id: patient.id,
        user_name: user.userName,
        email: user.email,
        rol: user.rol_id,
        token: generateToken(user),
      });
      return;
    }
  }
  res.status(401).send({ message: 'Invalid email or password' });
};

module.exports = postSigninHandler;


