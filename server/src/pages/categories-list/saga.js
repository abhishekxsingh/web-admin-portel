import { call, put, takeEvery } from "redux-saga/effects";
import HttpHelper from "../../utils/http-helper";
import { clean } from "../../utils/helper";
import { API_SERVICE_URL, NEWS_CATEGORIES_REQUEST } from "./constants";
import { newsCategoriesListSuccess, newsCategoriesListFailure } from "./action";

const { getRequest } = new HttpHelper();

export function* newsCategoriesList(action) {
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
      yield put(newsCategoriesListSuccess({ data, pagination }));
      return true;
    }
    yield put(newsCategoriesListFailure());
    return true;
  } catch (err) {
    console.error("Error in newsCategoriesList saga:", err);
    yield put(newsCategoriesListFailure());
  }
}

export function* watchNewsCategoriesList() {
  yield takeEvery(NEWS_CATEGORIES_REQUEST, newsCategoriesList);
}
