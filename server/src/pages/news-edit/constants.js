import config from "../../../config";
const VERSION = "v1";

export const NEWS_EDIT_REQUEST = "NEWS_EDIT_REQUEST";
export const NEWS_EDIT_SUCCESS = "NEWS_EDIT_SUCCESS";
export const NEWS_EDIT_FAILURE = "NEWS_EDIT_FAILURE";

// export const STATUS_MAPPER = {
//   VERIFIED: "border-success text-success",
//   REJECTED: "border-danger text-danger",
//   PENDING: "border-warning text-warning",
// };

export const getNewsEditUrl = (publicId) => {
  const url = `${config.API_SERVICE_URL}/${VERSION}/admin/article/${publicId}`;

  return url;
};
