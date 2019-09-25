const router = require('express').Router();
const Users = require('./users-model')
const bcrypt = require('bcryptjs')

router.get("/", (req, res) => {
    res.send('i am of the existing')
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
                    res.status(200).json({message: 'yasssssss'})
                } else {
                    res.status(401).json({error: 'You have either entered the wrong username or password'})
                }
            })
            .catch(error => {
                res.status(500).json({Error: 'there was an issue logging into the account!'})

            })
    }
})

module.exports = router