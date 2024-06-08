import {
  NEWS_STATUS_REQUEST,
  NEWS_STATUS_SUCCESS,
  NEWS_STATUS_FAILURE,
} from "./constants";

const newsStatusRequest = (data) => ({
  data,
  type: NEWS_STATUS_REQUEST,
});

export const newsStatusSuccess = () => ({
  type: NEWS_STATUS_SUCCESS,
});

export const newsStatusFailure = () => ({
  type: NEWS_STATUS_FAILURE,
});

export const updateNewsStatus = (dispatch, data) => {
  dispatch(newsStatusRequest(data));
};
