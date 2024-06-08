import config from "../../../config";
const VERSION = "v1";

export const CUSTOMER_LIST_REQUEST = 'CUSTOMER_LIST_REQUEST';
export const CUSTOMER_LIST_SUCCESS = 'CUSTOMER_LIST_SUCCESS';
export const CUSTOMER_LIST_FAILURE = 'CUSTOMER_LIST_FAILURE';
export const STATUS_MAPPER = {
    'ACTIVE': 'border-success text-success',
    'CLOSED': 'border-danger text-danger'
}

export const EMAIL_MAPPER = {
    'true': 'border-success text-success',
    'false': 'border-danger text-danger'
}
export const CUSTOMER_LIST_URL = `${config.API_SERVICE_URL}/${VERSION}/admin/basic-profile`;
