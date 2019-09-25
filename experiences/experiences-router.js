const router = require('express').Router();
const Experiences = require('./experiences-model')
router.get("/", (req, res) => {
    res.send('i am of the existing')
})

router.post("/newexp", (req, res) =>{
    const {
        origin_user,
        rating,
        name,
        location,
        pricing,
        description,
        img_url
    } = req.body
  
    if(!origin_user || !rating || !name || !location || !pricing || !description || !img_url){
        res.status(401).json({message: "origin_user, rating, name, location, pricing, description and img_url are requried fields"})
    }else{
        Experiences.add(req.body)
        .then(exp => {
            res.status(201).json(req.body)
        })
        .catch(error => {
            res.status(500).json(error)
        })
    }
})

module.exports = router