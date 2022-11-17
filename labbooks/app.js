
require("dotenv").config();

require("./db");
const express = require("express");

const hbs = require("hbs");

const app = express();

require("./config")(app);

const capitalize = require("./utils/capitalize");
const projectName = "P.B";

app.locals.appTitle = `${(projectName)}`;

// 👇 Start handling routes here

// require("./routes")(app)

const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

const placesRouter = require('./routes/places.routes')
app.use("/places", placesRouter)

const mapsRouter = require('./routes/map.routes')
app.use("/maps", mapsRouter)

const apiRouter = require("./routes/api.routes")
app.use("/api", apiRouter)

require("./error-handling")(app);



module.exports = app;
