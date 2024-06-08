import {
  NEWS_ADD_TAG_REQUEST,
  NEWS_ADD_TAG_SUCCESS,
  NEWS_ADD_TAG_FAILURE,
} from "./constants";

const newsAddTagListRequest = (data) => ({
  type: NEWS_ADD_TAG_REQUEST,
  data
});

export const newsAddTagListSuccess = (data) => ({
  type: NEWS_ADD_TAG_SUCCESS,
  data,
});
export const newsAddTagListFailure = () => ({
  type: NEWS_ADD_TAG_FAILURE,
});

export const newsAddTagList = async (dispatch,data) => {
  dispatch(newsAddTagListRequest(data));
};
