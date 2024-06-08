import { call, put, takeEvery } from "redux-saga/effects";
import HttpHelper from "../../utils/http-helper";
import { clean } from "../../utils/helper";
import { API_SERVICE_URL, NEWS_ADD_TAG_REQUEST } from "./constants";
import { newsAddTagListSuccess, newsAddTagListFailure } from "./action";

const { getRequest } = new HttpHelper();

export function* newsAddTagList(action) {
  try {
    const { data: requestPayload } = action;

    const { data, headers, status } = yield call(getRequest, {
      url:
        API_SERVICE_URL +
        `?${new URLSearchParams(clean(requestPayload)).toString()}`,
    });

    if (status === 200) {
      const pagination = {
        totalRecords: parseInt(headers["x-coreplatform-total-records"]),
        pageLimit: parseInt(headers["x-coreplatform-paging-limit"]),
      };
      yield put(newsAddTagListSuccess({ data, pagination }));
      return true;
    }
    yield put(newsAddTagListFailure());
    return true;
  } catch (err) {
    console.error("Error in newsAddTagList saga:", err);
    yield put(newsAddTagListFailure());
  }
}

export function* watchNewsAddTagList() {
  yield takeEvery(NEWS_ADD_TAG_REQUEST, newsAddTagList);
}
