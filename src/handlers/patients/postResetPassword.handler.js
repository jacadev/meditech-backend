const bcrypt = require('bcrypt');
const { Person } = require('../../db');

const postResetHandler = async (req, res) => {
  const { email, recoveryCode, newPassword } = req.body;

  try {
    const user = await Person.findOne({ where: { email } });

    if (!user) {
      user.codigosRecuperacion = null;
      await user.save();
      return res.status(401).send({ message: 'Correo electrónico inválido' });
    }

    const recoveryInfo = user.codigosRecuperacion && user.codigosRecuperacion.find(
      (item) => item.recoveryCode === Number(recoveryCode)
    );

    if (!recoveryInfo) {
      user.codigosRecuperacion = null;
      await user.save();
      return res.status(401).send({ message: 'El código de recuperación no es válido' });
    }

    if (recoveryInfo.expirationTime < Date.now()) {
      user.codigosRecuperacion = null;
      await user.save();
      return res.status(401).send({ message: 'El código de recuperación ha expirado' });
    }

    if (typeof newPassword !== 'string') {
      user.codigosRecuperacion = null;
      await user.save();
      return res.status(400).send({ message: 'La nueva contraseña no es válida' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    
    user.password = hashedPassword;
    user.codigosRecuperacion = null;
    await user.save();
    return res.status(200).send({ message: `${user.userName}, contraseña actualizada correctamente `} );
  } catch (error) {
      user.codigosRecuperacion = null;
      await user.save();
      return res.status(500).send({ message: 'Error servidor' });
    }
    
};

module.exports = postResetHandler;



