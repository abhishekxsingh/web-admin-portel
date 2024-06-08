import config from "../../../config";
const VERSION = "v1";

export const NEWS_DETAIL_REQUEST = "NEWS_DETAIL_REQUEST";
export const NEWS_DETAIL_SUCCESS = "NEWS_DETAIL_SUCCESS";
export const NEWS_DETAIL_FAILURE = "NEWS_DETAIL_FAILURE";

export const STATUS_MAPPER = {
  VERIFIED: "border-success text-success",
  REJECTED: "border-danger text-danger",
  PENDING: "border-warning text-warning",
};

export const getNewsDetailUrl = (publicId) => {
  const url = `${config.API_SERVICE_URL}/${VERSION}/admin/article/${publicId}`;

  return url;
};