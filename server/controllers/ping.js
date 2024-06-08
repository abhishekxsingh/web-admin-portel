const { VERSION, NAME } = require("../config");

/**
 * Check whether microservice is working
 * @return {object} status - returns ok that specifies that microservice is working.
 * */
const status = (req, res) => {
  res.getRequest({ name: NAME, status: "ok", version: VERSION });
};
// eslint-disable-next-line no-undef
module.exports = { status };
