import { ROLE_REQUEST, ROLE_SUCCESS, ROLE_FAILURE } from "./constants";

const roleRequest = (data) => ({
  type: ROLE_REQUEST,
  data,
});

export const roleSuccess = (data) => {
  return {
    type: ROLE_SUCCESS,
    data,
  };
};

export const roleFailure = () => ({
  type: ROLE_FAILURE,
});

export const getRole = async (dispatch,data) => {
  dispatch(roleRequest(data));
};
