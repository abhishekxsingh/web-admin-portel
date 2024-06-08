import { call, put, takeLatest } from "redux-saga/effects";
import HttpHelper from "../../../utils/http-helper";
import Storage from "../../../utils/storage";
import { LOGIN_URL } from "../../../utils/urls";

import { LOGIN_REQUEST } from "./constants";

import { loginSuccess, loginFailure } from "./action";

const { postRequest } = new HttpHelper();
const storage = new Storage();

export function* signin(action) {
  try {
    const {
      data: {
        email,
        password,
        loginResetPasswordCallback,
        loginDashboardCallback,
      },
    } = action;
    const { response, error } = yield call(postRequest, {
      data: {
        password: password,
        userName: email,
      },
      url: LOGIN_URL,
    });

    if (error) {
      const {
        response: { data },
      } = error;
      yield put(loginFailure());
      return true;
    }

    const {
      headers: {
        token,
        "set-password": setPassword,
        "refresh-token": refreshToken,
      },
    } = response;

    yield put(loginSuccess());

    if (setPassword) {
      loginResetPasswordCallback();
    }

    if (token) {
      storage.save("token", token);
      storage.save("refreshToken", refreshToken);

      loginDashboardCallback();
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchSignin() {
  yield takeLatest(LOGIN_REQUEST, signin);
}
