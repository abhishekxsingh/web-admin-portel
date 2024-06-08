const Ping = require("../controllers/ping");

// eslint-disable-next-line no-undef
module.exports = (router) => {
  router.get("/ping", Ping.status);
};
