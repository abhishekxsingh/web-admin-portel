import config from "../../../config";
const VERSION = "v1";

export const CUSTOMER_PROFILE_REQUEST = "CUSTOMER_PROFILE_REQUEST";
export const CUSTOMER_PROFILE_SUCCESS = "CUSTOMER_PROFILE_SUCCESS";
export const CUSTOMER_PROFILE_FAILURE = "CUSTOMER_PROFILE_FAILURE";

export const STATUS_MAPPER = {
  VERIFIED: "border-success text-success",
  REJECTED: "border-danger text-danger",
  PENDING: "border-warning text-warning",
};

export const getCustomerUrl = (userId) => {
  const url = `${config.IDENTITY_SERVICE_URL}/${VERSION}/admin/customer/${userId}/me`;

  return url;
};

export const getFileDetailUrl = (fileId) => {
  const url = `${config.IDENTITY_SERVICE_URL}/v1/admin/file/${fileId}`;

  return url;
};


export const getFileUrl = (fileId) => {
  const url = `${config.IDENTITY_SERVICE_URL}/v1/admin/file/${fileId}/view`;

  return url;
};
