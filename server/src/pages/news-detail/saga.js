import { call, put, takeEvery } from "redux-saga/effects";
import HttpHelper from "../../utils/http-helper";
import { NEWS_DETAIL_REQUEST, getNewsDetailUrl } from "./constants";
import { newsDetailSuccess, newsDetailFailure } from "./action";

const { getRequest } = new HttpHelper();

export function* newsDetail(action) {
  try {
    const { data, status, error } = yield call(getRequest, {
      url: getNewsDetailUrl(action.data.publicId),
    });

    if (error || status !== 200) {
      yield put(newsDetailFailure());
      return true;
    }
    yield put(newsDetailSuccess(data));
    return true;
  } catch (err) {
    console.error("Error in newsDetail saga:", err);
    yield put(newsDetailFailure());
  }
}

export function* watchNewsDetail() {
  yield takeEvery(NEWS_DETAIL_REQUEST, newsDetail);
}
