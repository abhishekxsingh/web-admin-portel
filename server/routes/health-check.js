const { status } = require("../controllers/health-check");
// eslint-disable-next-line no-undef
module.exports = (router) => {
  router.get("/healthcheck", status);
};
