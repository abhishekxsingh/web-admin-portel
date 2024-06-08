import { call, put, takeEvery } from "redux-saga/effects";
import HttpHelper from "../../utils/http-helper";
import {
  ADD_CATEGORY_REQUEST,
  GET_ADD_CATEGORY_URL,
} from "./constants";
import { addCategorySuccess, addCategoryFailure } from "./action";

const { postRequest } = new HttpHelper();

export function* addCategory(action) {
  const {
    data: { 
      notificationHandler, 
      name, 
      value
    },
    } = action;

  try {
    const response = yield call(postRequest, {
      url: GET_ADD_CATEGORY_URL,
      data: {name, value}
    });

    const { status } = response;

    if (status === 201) {
      yield put(addCategorySuccess());
      notificationHandler('success');
      return true;
    }

    const {
      error: { data },
    } = response;

    yield put(addCategoryFailure(data));
    notificationHandler("other");

    return true;
  } catch (err) {
    console.error("Error in updating status saga:", err);
    yield put(addCategoryFailure());
  }
}

export function* watchAddCategory() {
  yield takeEvery(ADD_CATEGORY_REQUEST, addCategory);
}
