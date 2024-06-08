import { call, put, takeEvery } from "redux-saga/effects";
import HttpHelper from "../../utils/http-helper";
import { CREATE_USER_REQUEST, CREATE_USER_URL } from "./constants";
import { createUserSuccess, createUserFailure } from "./action";

const { postRequest } = new HttpHelper();

export function* createUser(action) {
  const { name, email, mobileNumber, roleId } = action.data;
  const { callbackHandler } = action;
  try {
    const response = yield call(postRequest, {
      data: {
        name,
        email,
        mobileNumber,
        roleId,
      },
      url: CREATE_USER_URL,
    });

    const { status, error } = response;

    if (status === 201) {
      yield put(createUserSuccess());
      callbackHandler([{ name: 'sucess', message: 'user Created' }]);
      return true;
    }
    yield put(createUserFailure(error.details));
    callbackHandler(error.details);
    return true;
  } catch (err) {
    console.error("Error in createUser saga:", err);
    yield put(createUserFailure());
  }
}

export function* watchCreateUser() {
  yield takeEvery(CREATE_USER_REQUEST, createUser);
}
