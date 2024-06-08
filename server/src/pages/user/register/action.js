import {LOGIN_REQUEST,LOGIN_FAILURE,LOGIN_SUCCESS} from './constants';
// action types is an objet with key type and payload
const loginRequest = (data) => ({
  data,
  type: LOGIN_REQUEST,
});

export const loginSuccess = () => ({
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
  loginResetPasswordCallback
) => {
  dispatch(
    loginRequest({
      email,
      loginDashboardCallback,
      loginResetPasswordCallback,
      password,
    })
  );
};
