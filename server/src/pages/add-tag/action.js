import {
  ADD_TAG_REQUEST,
  ADD_TAG_SUCCESS,
  ADD_TAG_FAILURE,
} from "./constants";

const addTagRequest = (data) => ({
  data,
  type: ADD_TAG_REQUEST,
});

export const addTagSuccess = () => ({
  type: ADD_TAG_SUCCESS,
});

export const addTagFailure = () => ({
  type: ADD_TAG_FAILURE,
});

export const addTag = (dispatch, data) => {
  dispatch(addTagRequest(data));
};
