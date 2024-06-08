import {
  NEWS_LIST_REQUEST,
  NEWS_LIST_SUCCESS,
  NEWS_LIST_FAILURE,
} from "./constants";

const newsListRequest = (data) => ({
  type: NEWS_LIST_REQUEST,
  data
});

export const newsListSuccess = (data) => ({
  type: NEWS_LIST_SUCCESS,
  data,
});
export const newsListFailure = () => ({
  type: NEWS_LIST_FAILURE,
});

export const newsList = async (dispatch,data) => {
  dispatch(newsListRequest(data));
};
