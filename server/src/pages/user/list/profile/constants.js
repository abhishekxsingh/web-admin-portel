import config from "../../../../../config";
const VERSION = "v1";

export const USER_PROFILE_REQUEST = "USER_PROFILE_REQUEST";
export const USER_PROFILE_SUCCESS = "USER_PROFILE_SUCCESS";
export const USER_PROFILE_FAILURE = "USER_PROFILE_FAILURE";

export const STATUS_MAPPER = {
  ACTIVE: "border-success text-success",
  CLOSED: "border-danger text-danger",
};

export const EMAIL_MAPPER = {
  true: "border-success text-success",
  false: "border-danger text-danger",
};

export const USER_PROFILE_URL = `${config.IDENTITY_SERVICE_URL}/${VERSION}/admin/user`;
