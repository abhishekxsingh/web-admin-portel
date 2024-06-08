import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
} from "./constants";

const createUserRequest = (data,callbackHandler) => ({
  data,
  type: CREATE_USER_REQUEST,
  callbackHandler
});

export const createUserSuccess = (data) => ({
  type: CREATE_USER_SUCCESS,
  data
});
export const createUserFailure = (data) => ({
  type: CREATE_USER_FAILURE,
  data
});

export const createUser = (dispatch,data,callbackHandler) => {
  dispatch(createUserRequest(data,callbackHandler))};
