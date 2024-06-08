import config from "../../../config";
const VERSION = "v1";

export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';


export const CREATE_USER_URL = `${config.IDENTITY_SERVICE_URL}/${VERSION}/admin/user`;
