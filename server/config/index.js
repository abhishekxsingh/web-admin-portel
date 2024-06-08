/* eslint-disable no-undef */
const { version, name } = require("../package.json");

// eslint-disable-next-line no-undef
module.exports = {
  VERSION: version,
  NAME: name,
  DOMAIN: "http://localhost:3000",
  HOST: "0.0.0.0",
  PORT: process.env.PORT || 3002,
  IDENTITY_SERVICE_URL: process.env.IDENTITY_SERVICE_URL || "https://auth-dev.unbiasly.in",
  API_SERVICE_URL: process.env.API_SERVICE_URL || "https://api-dev.unbiasly.in",
};
