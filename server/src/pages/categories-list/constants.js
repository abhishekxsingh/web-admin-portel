import config from "../../../config";
const VERSION = "v1";

export const NEWS_CATEGORIES_REQUEST = 'NEWS_CATEGORIES_REQUEST';
export const NEWS_CATEGORIES_SUCCESS = 'NEWS_CATEGORIES_SUCCESS';
export const NEWS_CATEGORIES_FAILURE = 'NEWS_CATEGORIES_FAILURE';

export const API_SERVICE_URL = `${config.API_SERVICE_URL}/${VERSION}/admin/article/category`;
