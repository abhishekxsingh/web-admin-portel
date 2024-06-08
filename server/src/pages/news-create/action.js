import {
  CUSTOMER_PROFILE_REQUEST,
  CUSTOMER_PROFILE_SUCCESS,
  CUSTOMER_PROFILE_FAILURE,
} from "./constants";

const customerProfileRequest = (data) => ({
  type: CUSTOMER_PROFILE_REQUEST,
  data,
});

export const customerProfileSuccess = (data) => {
  return {
    type: CUSTOMER_PROFILE_SUCCESS,
    data,
  };
};
export const customerProfileFailure = () => ({
  type: CUSTOMER_PROFILE_FAILURE,
});

export const getCustomerProfile = async (dispatch, data) => {
  dispatch(customerProfileRequest(data));
};
