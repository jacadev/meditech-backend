const bcrypt = require('bcrypt');
const { Person } = require('../../db');

const postResetHandler = async (req, res) => {
  const { email, recoveryCode, newPassword } = req.body;

  try {
    const user = await Person.findOne({ where: { email } });

    if (!user) {
      return res.status(401).send({ message: 'Correo electrónico inválido' });
    }

    const recoveryInfo = user.codigosRecuperacion && user.codigosRecuperacion.find(
        (item) => item.recoveryCode === recoveryCode
      );

    if (!recoveryInfo) {
      return res
        .status(401)
        .send({ message: 'El código de recuperación no es válido' });
    }

    if (recoveryInfo.expirationTime < Date.now()) {
      return res
        .status(401)
        .send({ message: 'El código de recuperación ha expirado' });
    }

    // Actualizar la contraseña del usuario
    if (typeof newPassword !== 'string') {
        return res.status(400).send({ message: 'La nueva contraseña no es válida' });
      }
      
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    user.codigosRecuperacion = null;
    await user.save();

    res.status(200).send({ message: 'Contraseña actualizada correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Ha ocurrido un error en el servidor' });
  }
};

module.exports = postResetHandler;
