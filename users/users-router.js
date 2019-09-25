const router = require('express').Router();
const Users = require('./users-model')
router.get("/", (req, res) => {
    res.send('i am of the existing')
})
router.post("/signup", (req, res) => {
    const {username, password} = req.body

    if(!username || !password) {
        res.status(400).json({error: "Sign up requires a username & password"})
    }
    else{
        Users.add(req.body)
        .then(user => {
            res.status(201).json(user)
            
        })
        .catch(error => {
            res.status(500).json({error: "There was an issue adding new user to database"})
        })
    }
})
module.exports = router