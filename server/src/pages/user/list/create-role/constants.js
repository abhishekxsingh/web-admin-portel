import config from "../../../../../config";
const VERSION = "v1";

export const USER_LIST_REQUEST = 'USER_LIST_REQUEST';
export const USER_LIST_SUCCESS = 'USER_LIST_SUCCESS';
export const USER_LIST_FAILURE = 'USER_LIST_FAILURE';

export const STATUS_MAPPER = {
    'ACTIVE': 'border-success text-success',
    'CLOSED': 'border-danger text-danger'
}

export const EMAIL_MAPPER = {
    'true': 'border-success text-success',
    'false': 'border-danger text-danger'
}

export const USER_LIST_URL = `${config.IDENTITY_SERVICE_URL}/${VERSION}/admin/users`;
