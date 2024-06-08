import {
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAILURE,
} from "./constants";

const userProfileRequest = (data) => ({
  type: USER_PROFILE_REQUEST,
  data,
});

export const userProfileSuccess = (data) => ({
  type: USER_PROFILE_SUCCESS,
  data,
});
export const userProfileFailure = () => ({
  type: USER_PROFILE_FAILURE,
});

export const userProfile = async (dispatch, data) => {
  dispatch(userProfileRequest(data));
};
