import { call, put, takeEvery } from "redux-saga/effects";
import HttpHelper from "../../utils/http-helper";
import {
  NEWS_STATUS_REQUEST,
  getNewsStatusUpdateUrl,
} from "./constants";
import { newsStatusSuccess, newsStatusFailure } from "./action";

const { patchRequest } = new HttpHelper();

export function* newsStatus(action) {
  console.log(action);
  const {
    data: { 
      notificationHandler, 
      publicId,
      status: newsStatus
    },
    } = action;

  try {
    const response = yield call(patchRequest, {
      url: getNewsStatusUpdateUrl({publicId, status: newsStatus})
    });
    console.log(response)
    const { status } = response;

    if (status === 204) {
      yield put(newsStatusSuccess());
      notificationHandler('success');
      return true;
    }

    const {
      error: { data },
    } = response;

    yield put(newsStatusFailure(data));
    notificationHandler("other");

    return true;
  } catch (err) {
    console.error("Error in updating status saga:", err);
    yield put(newsStatusFailure());
  }
}

export function* watchNewsStatus() {
  yield takeEvery(NEWS_STATUS_REQUEST, newsStatus);
}
