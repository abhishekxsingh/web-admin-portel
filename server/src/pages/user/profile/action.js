import {
  USER_DETAIL_REQUEST,
  USER_DETAIL_FAILURE,
  USER_DETAIL_SUCCESS,
} from "./constants";
// action types is an objet with key type and payload
export const userDetailRequest = (data) => ({
  type: USER_DETAIL_REQUEST,
  data,
});

export const userDetailSuccess = (data) => ({
  type: USER_DETAIL_SUCCESS,
  data,
});

export const userDetailFailure = () => ({
  type: USER_DETAIL_FAILURE,
});

export const userDetail = async (dispatch, userDetailDashboardCallback) => {
  dispatch(userDetailRequest({ userDetailDashboardCallback }));
};
