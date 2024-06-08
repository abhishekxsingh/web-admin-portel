import { call, put, takeEvery } from "redux-saga/effects";
import HttpHelper from "../../utils/http-helper";
import { ROLE_REQUEST, GET_ROLE_URL } from "./constants";
import { roleSuccess, roleFailure } from "./action";

const { getRequest } = new HttpHelper();

export function* role(action) {
  try {
    const { data, status, error } = yield call(getRequest, {
      url: GET_ROLE_URL,
    });

    if (error || status !== 200) {
      yield put(roleFailure());
      return true;
    }

    yield put(roleSuccess(data));
    return true;
  } catch (err) {
    console.error("Error in role saga:", err);
    yield put(roleFailure());
  }
}

export function* watchRole() {
  yield takeEvery(ROLE_REQUEST, role);
}
