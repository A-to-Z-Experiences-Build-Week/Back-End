const router = require('express').Router();

router.get("/", (req, res) => {
    res.send('i am of the existing')
})

module.exports = router