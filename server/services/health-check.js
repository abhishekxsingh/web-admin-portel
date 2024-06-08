const axios = require("axios");

const checkMicroServiceStatus = async (url) => {
  try {
    const {
      data: { version },
    } = await axios(`${url}/ping`);

    return {
      name: url,
      status: "success",
      type: "service",
      version: version || null,
    };
  } catch (error) {
    return {
      name: url,
      status: "failure",
      type: "service",
    };
  }
};

const status = async (urls = []) => {
  const response = await Promise.all(
    urls.map(async (url) => {
      const result = await checkMicroServiceStatus(`${url}`);

      return result;
    }),
  );

  return response;
};

// eslint-disable-next-line no-undef
module.exports = { checkMicroServiceStatus, status };
