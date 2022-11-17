const router = require("express").Router()

const { findByIdAndUpdate, findByIdAndDelete } = require("./../models/Place.model")
const Place = require('./../models/Place.model')

// Places List 
router.get("/list", (req, res, next) => {
    // res.send("Restaurant List Goes here")
    Place
        .find()
        .then(places => {
            res.render("places/list-places", { places })
        })
        .catch(err => console.log(err))
})

// Place Details - Revisar si es necesario 

// New Place - Form (render)

router.get("/create", (req, res, next) => {
    // res.send("Create Places here")
    res.render('places/create-places')

})

// New Place - Form (handle)

router.post("/create", (req, res, next) => {

    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }
    Place
        .create({ name, type, location })
        .then(() => {
            res.redirect('/places/list')
        })
        .catch(err => console.log(err))

})
// Edit Place - Form (render)

router.get("/edit/:id", (req, res, next) => {
    // res.send("Editing goes here")
    const { id: place_id } = req.params

    Place
        .findById(place_id)
        .then(place => {
            res.render('places/edit-places', place)
        })
        .catch(err => console.log(err))

})

// Edit Place - Form (handle)

router.post("/edit/:id", (req, res, next) => {

    const { id: place_id } = req.params
    const { name, type } = req.body

    Place
        .findByIdAndUpdate(place_id, { name, type })
        .then(() => {
            res.redirect('/places/list')
        })
        .catch(err => console.log(err))
})

// Delete 

router.post('/delete/:id', (req, res, next) => {

    const { id: place_id } = req.params

        .findByIdAndDelete(place_id)
        .then(() => {
            res.redirect('/places/list')
        })
        .catch(err => console.log(err))
})


module.exports = router;
