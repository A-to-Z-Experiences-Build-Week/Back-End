const express = require('express');
const usersrouter = require('../users/users-router')
const experiencesRouter = require('../experiences/experiences-router')
const authenticate = require('../auth/auth-middleware')
const helmet = require("helmet");
const cors = require("cors");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use('/api/users', usersrouter)
server.use('/api/exp', authenticate, experiencesRouter)

server.get('/', (req, res) => {
  res.status(200).json({ api: 'up' });
});



module.exports = server;