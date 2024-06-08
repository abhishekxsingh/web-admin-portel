import { call, put, takeEvery } from "redux-saga/effects";
import HttpHelper from "../../../utils/http-helper";
import { CREATE_USER_REQUEST, CREATE_USER_URL } from "./constants";
import { userListSuccess, userListFailure } from "./action";

const { getRequest } = new HttpHelper();

export function* createUser(action) {
  console.log(action)
  try {
    const {
      data: { pageNumber, pageSize },
    } = action;

    const { data, headers, status, error } = yield call(getRequest, {
      url: CREATE_USER_URL,
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

export function* watchCreateUser() {
  yield takeEvery(CREATE_USER_REQUEST, userList);
}
