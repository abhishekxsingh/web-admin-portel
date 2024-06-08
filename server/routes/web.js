const { clientPortal } = require("../controllers/web");

// eslint-disable-next-line no-undef
module.exports = (router) => {
  router.get("/", clientPortal);
  router.all("/*", clientPortal);
  router.all("/*/*", clientPortal);
  router.all("/*/*/*", clientPortal);
};
