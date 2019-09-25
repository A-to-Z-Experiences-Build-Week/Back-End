const express = require('express');
const usersrouter = require('../users/users-router')
const experiencesRouter = require('../experiences/experiences-router')

const server = express();

server.use(express.json());
server.use('/api/users', usersrouter)
server.use('/api/exp', experiencesRouter)

server.get('/', (req, res) => {
  res.status(200).json({ api: 'up' });
});



module.exports = server;