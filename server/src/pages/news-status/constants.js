import config from "../../../config";
const VERSION = "v1";

export const NEWS_STATUS_REQUEST = 'NEWS_STATUS_REQUEST';
export const NEWS_STATUS_SUCCESS = 'NEWS_STATUS_SUCCESS';
export const NEWS_STATUS_FAILURE = 'NEWS_STATUS_FAILURE';

export const getNewsStatusUpdateUrl = (payload) => {
    const {publicId,status} = payload;
    const url = `${config.API_SERVICE_URL}/${VERSION}/admin/article/${publicId}/status/${status}`;
    return url;
}

