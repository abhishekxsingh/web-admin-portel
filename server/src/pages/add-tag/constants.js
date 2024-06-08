import config from "../../../config";
const VERSION = "v1";

export const ADD_TAG_REQUEST = 'ADD_TAG_REQUEST';
export const ADD_TAG_SUCCESS = 'ADD_TAG_SUCCESS';
export const ADD_TAG_FAILURE = 'ADD_TAG_FAILURE';

export const GET_ADD_TAG_URL = `${config.API_SERVICE_URL}/${VERSION}/admin/addTag/add`;

