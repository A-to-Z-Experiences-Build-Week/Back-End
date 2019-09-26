const express = require('express');
const usersrouter = require('../users/users-router')
const experiencesRouter = require('../experiences/experiences-router')
const authenticate = require('../auth/auth-middleware')

const server = express();

server.use(express.json());
server.use('/api/users', usersrouter)
server.use('/api/exp', authenticate, experiencesRouter)

server.get('/', (req, res) => {
  res.status(200).json({ api: 'up' });
});



module.exports = server;