import config from "../../../../../config";
const VERSION = "v1";

export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';

export const STATUS_MAPPER = {
    'ACTIVE': 'border-success text-success',
    'CLOSED': 'border-danger text-danger'
}

export const EMAIL_MAPPER = {
    'true': 'border-success text-success',
    'false': 'border-danger text-danger'
}

export const CREATE_USER_URL = `${config.IDENTITY_SERVICE_URL}/${VERSION}/admin/users`;
