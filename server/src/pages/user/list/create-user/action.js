import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
} from "./constants";

const userListRequest = (data) => ({
  type: CREATE_USER_REQUEST,
  data,
});

export const userListSuccess = (data) => ({
  type: CREATE_USER_SUCCESS,
  data,
});
export const userListFailure = () => ({
  type: CREATE_USER_FAILURE
});

export const userList = async (dispatch, data) => {
  console.log(data)
  dispatch(userListRequest(data));
};
