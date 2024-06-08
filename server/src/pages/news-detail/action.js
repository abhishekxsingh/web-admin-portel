import {
  NEWS_DETAIL_REQUEST,
  NEWS_DETAIL_SUCCESS,
  NEWS_DETAIL_FAILURE,
} from "./constants";

const newsDetailRequest = (data) => ({
  type: NEWS_DETAIL_REQUEST,
  data,
});

export const newsDetailSuccess = (data) => {
  return {
    type: NEWS_DETAIL_SUCCESS,
    data,
  };
};
export const newsDetailFailure = () => ({
  type: NEWS_DETAIL_FAILURE,
});

export const newsDetail = async (dispatch, data) => {
  dispatch(newsDetailRequest(data));
};
