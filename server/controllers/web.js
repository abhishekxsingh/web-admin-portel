/* eslint-disable sort-keys */
const { VERSION } = require("../config");

const clientPortal = async (req, res) => {
  const locals = Object.assign({}, res.locals, { VERSION });

  res.render("layout", { title: "Rafiki Dashboard", urls: { ...locals } });
};
// eslint-disable-next-line no-undef
module.exports = { clientPortal };
