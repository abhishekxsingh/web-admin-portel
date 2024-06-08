import { call, put, takeEvery } from "redux-saga/effects";
import HttpHelper from "../../utils/http-helper";
import {
  ADD_TAG_REQUEST,
  getaddTagUpdateUrl,
} from "./constants";
import { newsStatusSuccess, newsStatusFailure } from "./action";

const { patchRequest } = new HttpHelper();

export function* addTag(action) {
  console.log(action);
  const {
    data: { 
      notificationHandler, 
      publicId,
    },
    } = action;

  try {
    const response = yield call(patchRequest, {
      url: getaddTagUpdateUrl({publicId, status: addTag})
    });
    console.log(response)
    const { status } = response;

    if (status === 204) {
      yield put(addTagSuccess());
      notificationHandler('success');
      return true;
    }

    const {
      error: { data },
    } = response;

    yield put(addTagFailure(data));
    notificationHandler("other");

    return true;
  } catch (err) {
    console.error("Error in updating status saga:", err);
    yield put(addTagFailure());
  }
}

export function* watchaddTag() {
  yield takeEvery(ADD_TAG_REQUEST, addTag);
}
