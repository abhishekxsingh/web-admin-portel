import { call, put, takeEvery } from "redux-saga/effects";
import HttpHelper from "../../utils/http-helper";
import { clean } from "../../utils/helper";
import { API_SERVICE_URL, NEWS_LIST_REQUEST } from "./constants";
import { newsListSuccess, newsListFailure } from "./action";

const { getRequest } = new HttpHelper();

export function* newsList(action) {
  try {
    const { data: requestPayload } = action;
    console.log(API_SERVICE_URL)
    const { data, headers, status, error } = yield call(getRequest, {
      url:
        API_SERVICE_URL +
        `?${new URLSearchParams(clean(requestPayload)).toString()}`,
    });

    if (status === 200) {
      const pagination = {
        totalRecords: parseInt(headers["x-coreplatform-total-records"]),
        pageLimit: parseInt(headers["x-coreplatform-paging-limit"]),
      };
      yield put(newsListSuccess({ data, pagination }));
      return true;
    }
    yield put(newsListFailure());
    return true;
  } catch (err) {
    console.error("Error in newsList saga:", err);
    yield put(newsListFailure());
  }
}

export function* watchNewsList() {
  yield takeEvery(NEWS_LIST_REQUEST, newsList);
}
