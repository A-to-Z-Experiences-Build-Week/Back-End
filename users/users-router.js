const router = require('express').Router();
const Users = require('./users-model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const secrets = require('../config/secrets')


router.get("/", (req, res) => {
    res.send('i am of the existing')
})

router.post("/signup", (req, res) => {
    const {username, password} = req.body
})

router.post("/signup", (req, res) => {
    const {username, password} = req.body
    req.body.password = bcrypt.hashSync(password, 10)

    if (!username || !password) {
        res.status(400).json({error: "Sign up requires a username & password"})
    } else {
        Users.add(req.body)
            .then(user => {
                res.status(201).json(req.body)
                
            })
            .catch(error => {
                res.status(500).json({error: "There was an issue adding new user to database"})
            })
    }
})

router.post("/login", (req, res) => {
    const { username, password } = req.body

    if (!username || !password) {
        res.status(400).json({error: "You must proveide both a username and password to login"})
    } else {
        Users.findBy({username})
            .first()
            .then(user => {
                if (user && bcrypt.compareSync(password, user.password)) {
                    const token = generateToken(user)
                    const loggedInUser = {username: user.username, id: user.id, token}
                    res.status(200).json(loggedInUser)
                } else {
                    res.status(401).json({error: 'You have either entered the wrong username or password'})
                }
            })
            .catch(error => {
                res.status(500).json({Error: 'there was an issue logging into the account!'})

            })
    }
})

//create the token
function generateToken(user) {
    const payload = {
      username: user.username
    }
    const options = {
      expiresIn: '1d'
    }
    return jwt.sign(payload, secrets.jwtSecret, options)
  }


  
module.exports = router