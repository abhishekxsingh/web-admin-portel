import { call, put, takeEvery } from "redux-saga/effects";
import HttpHelper from "../../../utils/http-helper";
import { USER_LIST_REQUEST, USER_LIST_URL } from "./constants";
import { userListSuccess, userListFailure } from "./action";

const { getRequest } = new HttpHelper();

export function* userList(action) {
  console.log(action)
  try {
    const {
      data: { pageNumber, pageSize },
    } = action;

    const { data, headers, status, error } = yield call(getRequest, {
      url: USER_LIST_URL + `?pageNumber=${pageNumber}&pageSize=${pageSize}`,
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
    console.error("Error in userList saga:", err);
    yield put(userListFailure());
  }
}

export function* watchUserList() {
  yield takeEvery(USER_LIST_REQUEST, userList);
}
