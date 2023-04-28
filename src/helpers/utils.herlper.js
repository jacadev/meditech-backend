const jwt = require('jsonwebtoken');


const generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      user_name: user.userName,
      email: user.email,
    },
    process.env.JWT_KEY,
    {
      expiresIn: '30d',
    }
  );
};

const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.slice(7, authorization.length);
    jwt.verify(token, process.env.JWT_KEY, (error, decode) => {
      if (error) {
        res.status(401).send({ message: 'Invalid Token' });
      } else {
        req.user = decode;
        next();
      }
    });
  } else {
    res.status(401).send({ message: 'No Token' });
  }
};

const isAdmin = (req, res, next) => {
  if (req.user && req.user.rol === 3) {
    next();
  } else {
    res.status(401).send({ message: 'Invalid Admin Token' });
  }
};

const generateRecoveryCode = () => {
  const recoveryCode = Math.floor(Math.random() * 9000 + 1000);
  const expirationTime = Date.now() + 60 * 60 * 1000; // 1 hora de duración
  return { code: recoveryCode, expires: expirationTime };
};

module.exports = {
  generateToken,
  isAuth,
  isAdmin,
  generateRecoveryCode,
};
