const router = require('express').Router();
const Users = require('./users-model')

router.get("/", (req, res) => {
    res.send('i am of the existing')
})

module.exports = router