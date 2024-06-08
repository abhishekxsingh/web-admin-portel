import { call, put, takeEvery } from "redux-saga/effects";
import HttpHelper from "../../utils/http-helper";
import { CUSTOMER_PROFILE_REQUEST, getCustomerUrl } from "./constants";
import { customerProfileSuccess, customerProfileFailure } from "./action";

const { getRequest } = new HttpHelper();

export function* customerProfile(action) {
  try {
    const { data, status, error } = yield call(getRequest, {
      url: getCustomerUrl(action.data.userId),
    });

    if (error || status !== 200) {
      yield put(customerProfileFailure());
      return true;
    }
    yield put(customerProfileSuccess(data));
    return true;
  } catch (err) {
    console.error("Error in customerProfile saga:", err);
    yield put(customerProfileFailure());
  }
}

export function* watchCustomerProfile() {
  yield takeEvery(CUSTOMER_PROFILE_REQUEST, customerProfile);
}
