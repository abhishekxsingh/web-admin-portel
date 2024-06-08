import { call, put, takeEvery } from "redux-saga/effects";
import HttpHelper from "../../utils/http-helper";
import { NEWS_EDIT_REQUEST, getNewsEditUrl } from "./constants";
import { newsEditSuccess, newsEditFailure } from "./action";

const { patchRequest } = new HttpHelper();

export function* newsEdit(action) {
  try {

    const publicId = action.data.publicId;
    delete action.data.publicId;
    const { data, status, error } = yield call(patchRequest, {
      url: getNewsEditUrl(publicId),
      data: action.data,
    });

    if (error || status !== 204) {
      yield put(newsEditFailure());
      return true;
    }
    yield put(newsEditSuccess(data));
    action.notificationHandler()
    return true;
  } catch (err) {
    console.error("Error in newsEdit saga:", err);
    yield put(newsEditFailure());
  }
}

export function* watchNewsEdit() {
  yield takeEvery(NEWS_EDIT_REQUEST, newsEdit);
}
