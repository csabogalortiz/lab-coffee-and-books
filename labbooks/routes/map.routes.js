const router = require("express").Router();

router.get("/main", (req, res, next) => {

    res.render("maps/main-map")
})

module.exports = router