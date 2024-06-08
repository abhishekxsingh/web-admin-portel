import { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS } from "./constants";
// action types is an objet with key type and payload
export const loginRequest = (data) => ({
  data,
  type: LOGIN_REQUEST,
});

export const loginSuccess = (data) => ({
  data,
  type: LOGIN_SUCCESS,
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export const signin = async (
  email,
  password,
  dispatch,
  loginDashboardCallback,
  loginResetPasswordCallback,
  handleNotification
) => {
  dispatch(
    loginRequest({
      email,
      loginDashboardCallback,
      loginResetPasswordCallback,
      password,
      handleNotification
    })
  );
};
