const jwt = require('jsonwebtoken')

const secrets = require('../config/secrets')

module.exports = (req, res, next) => {
  const token = req.headers.token

  if (token) {
    jwt.verify(token, secrets.jwtSecret, (error, decodedToken) => {
      if (error) {
        res.status(401).json({ Error: 'not a valid token' });
      } else {
        req.user = {username: decodedToken.username}
        next()
      }
    })
  } else {
    res.status(400).json({Message: 'You must login to acess this endpoint'})
  }
};
