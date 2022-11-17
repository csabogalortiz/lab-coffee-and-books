const router = require("express").Router()

const Place = require('./../models/Place.model')

router.get("/places", (req, res, next) => {
    // res.send('hola')

    Place
        .find()
        .then(places => res.json(places))
        .catch(err => console.log(err))
})
module.exports = router