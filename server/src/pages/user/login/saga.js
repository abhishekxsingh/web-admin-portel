/* eslint-disable no-unused-vars */
import { call, put, takeLatest } from "redux-saga/effects";
import HttpHelper from "../../../utils/http-helper";
import { LOGIN_URL } from "./constants";
import { LOGIN_REQUEST } from "./constants";

import { loginSuccess, loginFailure } from "./action";

const { postRequest } = new HttpHelper();

export function* signin(action) {
  const {
    data: {
      email,
      password,
      loginDashboardCallback,
      handleNotification
    },
  } = action;

  try {

    const { headers, status, error } = yield call(postRequest, {
      data: {
        password: password,
        userName: email,
      },
      url: LOGIN_URL,
    });

    if (error) {
      yield put(loginFailure());

      return true;
    }

    yield put(loginSuccess({ token: headers.token }));

    if (status === 201) {
      loginDashboardCallback();
    }

  } catch (err) {
    const { status, data } = err;

    if (status === 429) {
      handleNotification(data)
    }
    throw new Error(err);
  }
}

export function* watchSignin() {
  yield takeLatest(LOGIN_REQUEST, signin);
}
