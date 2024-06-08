import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAILURE,
} from "./constants";

const userListRequest = (data) => ({
  type: USER_LIST_REQUEST,
  data,
});

export const userListSuccess = (data) => ({
  type: USER_LIST_SUCCESS,
  data,
});
export const userListFailure = () => ({
  type: USER_LIST_FAILURE
});

export const userList = async (dispatch, data) => {
  console.log(data)
  dispatch(userListRequest(data));
};
