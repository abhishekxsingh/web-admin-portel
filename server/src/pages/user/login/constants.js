import config from "../../../../config";
const VERSION = "v1";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGIN_URL = `${config.IDENTITY_SERVICE_URL}/${VERSION}/admin/login`;
export const REFRESH_TOKEN_URL = `${config.IDENTITY_SERVICE_URL}/${VERSION}/admin/refresh-token`;
