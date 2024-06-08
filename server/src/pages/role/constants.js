import config from "../../../config";
const VERSION = "v1";

export const ROLE_REQUEST = 'ROLE_REQUEST';
export const ROLE_SUCCESS = 'ROLE_SUCCESS';
export const ROLE_FAILURE = 'ROLE_FAILURE';

export const GET_ROLE_URL =  `${config.IDENTITY_SERVICE_URL}/${VERSION}/admin/role`;
