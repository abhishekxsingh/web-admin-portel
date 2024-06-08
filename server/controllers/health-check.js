const { HealthCheck } = require("../services");
const { VERSION, NAME } = require("../config");

const status = async (req, res) => {
  const response = await HealthCheck.status([]);

  return res.getRequest({
    dependsOn: response,
    name: NAME,
    version: `${VERSION}`,
  });
};

// eslint-disable-next-line no-undef
module.exports = { status };
