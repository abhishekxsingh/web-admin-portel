import config from "../../../../config";
const VERSION = "v1";

export const USER_DETAIL_REQUEST = "USER_DETAIL_REQUEST";
export const USER_DETAIL_FAILURE = "USER_DETAIL_FAILURE";
export const USER_DETAIL_SUCCESS = "USER_DETAIL_SUCCESS";

export const USER_DETAIL_URL = `${config.IDENTITY_SERVICE_URL}/${VERSION}/admin/me`;
