import config from "../../../config";
const VERSION = "v1";

export const ADD_CATEGORY_REQUEST = 'ADD_CATEGORY_REQUEST';
export const ADD_CATEGORY_SUCCESS = 'ADD_CATEGORY_SUCCESS';
export const ADD_CATEGORY_FAILURE = 'ADD_CATEGORY_FAILURE';

export const GET_ADD_CATEGORY_URL = `${config.API_SERVICE_URL}/${VERSION}/admin/category/add`;
