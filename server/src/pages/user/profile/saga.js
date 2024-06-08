import { call, put, takeLatest } from "redux-saga/effects";
import HttpHelper from "../../../utils/http-helper";
import { USER_DETAIL_URL, USER_DETAIL_REQUEST } from "./constants";

import { userDetailSuccess, userDetailFailure } from "./action";

const { getRequest } = new HttpHelper();
export function* userDetail(action) {
  try {
    const {
      data: { userDetailDashboardCallback },
    } = action;

    const { data, status, error } = yield call(getRequest, {
      url: USER_DETAIL_URL,
    });

    if (error) {
      yield put(userDetailFailure());

      return true;
    }

    if (status === 200) {
      userDetailDashboardCallback(data);
    }

    yield put(userDetailSuccess(data));
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchUserDetail() {
  yield takeLatest(USER_DETAIL_REQUEST, userDetail);
}
