import config from "../../../config";
const VERSION = "v1";

export const NEWS_ADD_TAG_REQUEST = 'NEWS_ADD_TAG_REQUEST';
export const NEWS_ADD_TAG_SUCCESS = 'NEWS_ADD_TAG_SUCCESS';
export const NEWS_ADD_TAG_FAILURE = 'NEWS_ADD_TAG_FAILURE';

export const API_SERVICE_URL = `${config.API_SERVICE_URL}/${VERSION}/admin/article/tags`;
