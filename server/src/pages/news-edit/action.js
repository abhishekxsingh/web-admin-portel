import {
  NEWS_EDIT_REQUEST,
  NEWS_EDIT_SUCCESS,
  NEWS_EDIT_FAILURE,
} from "./constants";

const newsEditRequest = (data, notificationHandler) => ({
  type: NEWS_EDIT_REQUEST,
  data,
  notificationHandler
});

export const newsEditSuccess = (data) => {
  return {
    type: NEWS_EDIT_SUCCESS,
    data,
  };
};
export const newsEditFailure = () => ({
  type: NEWS_EDIT_FAILURE,
});

export const newsEdit = async (dispatch, data, notificationHandler) => {
  dispatch(newsEditRequest(data, notificationHandler));
};
