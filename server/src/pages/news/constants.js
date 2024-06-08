import config from "../../../config";
const VERSION = "v1";

export const NEWS_LIST_REQUEST = 'NEWS_LIST_REQUEST';
export const NEWS_LIST_SUCCESS = 'NEWS_LIST_SUCCESS';
export const NEWS_LIST_FAILURE = 'NEWS_LIST_FAILURE';

export const STATUS_MAPPER = {
    'ACTIVE': 'border-success text-success',
    'CLOSED': 'border-danger text-danger'
}

export const EMAIL_MAPPER = {
    'true': 'border-success text-success',
    'false': 'border-danger text-danger'
}

export const ARTICLE_STATUS = {
    PENDING: 'pending',
    IN_REVIEW: 'in-review',
    PUBLISHED: 'published',
    UNPUBLISHED: 'unpublished',
  };
  

export const API_SERVICE_URL = `${config.API_SERVICE_URL}/${VERSION}/admin/articles`;
