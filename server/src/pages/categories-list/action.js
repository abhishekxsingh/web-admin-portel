import {
  NEWS_CATEGORIES_REQUEST,
  NEWS_CATEGORIES_SUCCESS,
  NEWS_CATEGORIES_FAILURE,
} from "./constants";

const newsCategoriesListRequest = (data) => ({
  type: NEWS_CATEGORIES_REQUEST,
  data
});

export const newsCategoriesListSuccess = (data) => ({
  type: NEWS_CATEGORIES_SUCCESS,
  data,
});

export const newsCategoriesListFailure = () => ({
  type: NEWS_CATEGORIES_FAILURE,
});

export const newsCategoriesList = async (dispatch,data) => {
  dispatch(newsCategoriesListRequest(data));
};
