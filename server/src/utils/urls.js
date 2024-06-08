import config from "../../config";

const { urls } = window;
const VERSION = "v1";

export const IDENTITY_SERVICE_URL = urls
  ? urls["data-identity-service-url"]
  : config.IDENTITY_SERVICE_URL;

export const REFRESH_TOKEN_URL = IDENTITY_SERVICE_URL+`/${VERSION}/refresh-token`;
export const LOGIN_TOKEN_URL = IDENTITY_SERVICE_URL+`/${VERSION}/admin/login`;
