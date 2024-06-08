import { call, put, takeEvery } from "redux-saga/effects";
import HttpHelper from "../../../utils/http-helper";
import { USER_PROFILE_REQUEST, USER_PROFILE_URL } from "./constants";
import { userProfileSuccess, userProfileFailure } from "./action";

const { getRequest } = new HttpHelper();

export function* userProfile(action) {
  try {
    const {
      data: { pageNumber, pageSize },
    } = action;

    const { data, headers, status, error } = yield call(getRequest, {
      url: USER_PROFILE_URL + `?pageNumber=${pageNumber}&pageSize=${pageSize}`,
    });

    if (status === 200) {
      const pagination = {
        totalRecords: parseInt(headers["x-coreplatform-total-records"]),
        pageLimit: parseInt(headers["x-coreplatform-paging-limit"]),
      };
      yield put(userListSuccess({ data, pagination }));
      return true;
    }
    yield put(userListFailure());
    return true;
  } catch (err) {
    console.error("Error in userProfile saga:", err);
    yield put(userListFailure());
  }
}

export function* watchUserProfile() {
  yield takeEvery(USER_PROFILE_REQUEST, userProfile);
}
