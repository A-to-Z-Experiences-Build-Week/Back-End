const router = require('express').Router();
const Experiences = require('./experiences-model')

router.get("/sanity", (req, res) => {
    res.send('i am of the existing')
})

router.get("/", (req, res) => {
    Experiences.find()
        .then(list => {
            res.status(200).json(list)
        })
        .catch(error => {
            res.status(500).json({error: 'there was an issue retriveing the data from the server'})
        })     
})

router.get("/:id", (req, res) => {
    if (!req.params.id) {
        res.status(401).json({error: "you must give an id to find by id"})
    } else {
        Experiences.findBy(req.params.id)
            .then(list => {
                res.status(200).json(list)
            })
            .catch(error => {
                res.status(500).json(error)
            })
    }
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