import {
  ADD_CATEGORY_REQUEST,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILURE,
} from "./constants";

const addCategoryRequest = (data) => ({
  data,
  type: ADD_CATEGORY_REQUEST,
});

export const addCategorySuccess = (data) => ({
  type: ADD_CATEGORY_SUCCESS,
});

export const addCategoryFailure = () => ({
  type: ADD_CATEGORY_FAILURE,
});

export const addCategory = (dispatch, data) => {
  dispatch(addCategoryRequest(data));
};
