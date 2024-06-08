const express = require("express");

const router = express.Router();

const pingRoutes = require("./ping");
const healthCheckRoutes = require("./health-check");
const webRoutes = require("./web");

pingRoutes(router);
healthCheckRoutes(router);
webRoutes(router);

// eslint-disable-next-line no-undef
module.exports = router;
