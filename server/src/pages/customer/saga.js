import { call, put, takeEvery } from "redux-saga/effects";
import HttpHelper from "../../utils/http-helper";
import { clean } from "../../utils/helper";
import { CUSTOMER_LIST_URL, CUSTOMER_LIST_REQUEST} from "./constants";
import { customerListSuccess, customerListFailure } from "./action";

const { getRequest } = new HttpHelper();

export function* customerList(action) {
  try {
    const { data: requestPayload } = action;
    console.log(CUSTOMER_LIST_URL)
    const { data, headers, status } = yield call(getRequest, {
      url:
        CUSTOMER_LIST_URL +
        `?${new URLSearchParams(clean(requestPayload)).toString()}`,
    });

    if (status === 200) {
      const pagination = {
        totalRecords: parseInt(headers["x-coreplatform-total-records"]),
        pageLimit: parseInt(headers["x-coreplatform-paging-limit"]),
      };
      yield put(customerListSuccess({ data, pagination }));
      return true;
    }
    yield put(customerListFailure());
    return true;
  } catch (err) {
    console.error("Error in customerList saga:", err);
    yield put(customerListFailure());
  }
}

export function* watchCustomerList() {
  yield takeEvery(CUSTOMER_LIST_REQUEST, customerList);
}
