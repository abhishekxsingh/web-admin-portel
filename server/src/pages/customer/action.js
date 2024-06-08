import {
  CUSTOMER_LIST_REQUEST,
  CUSTOMER_LIST_SUCCESS,
  CUSTOMER_LIST_FAILURE,
} from "./constants";

const customerListRequest = (data) => ({
  type: CUSTOMER_LIST_REQUEST,
  data
});

export const customerListSuccess = (data) => ({
  type: CUSTOMER_LIST_SUCCESS,
  data,
});
export const customerListFailure = () => ({
  type: CUSTOMER_LIST_FAILURE,
});

export const customerList = async (dispatch,data) => {
  dispatch(customerListRequest(data));
};
