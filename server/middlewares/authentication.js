//authentication here
const { User } = require('../models');
const { verifyToken } = require('../helpers/jwt');

async function authentication(req, res, next) {
  const { token } = req.headers;
  try {
    if (!token) throw { name: 'DATA_NOT_FOUND' };
    const decodedToken = verifyToken(token);
    const user = await User.findOne({
      where: {
        email: decodedToken.email
      }
    });
    if (!user) throw { name: 'AUTHENTICATION_FAILED' };
    req.loggedInUser = decodedToken;
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = authentication;