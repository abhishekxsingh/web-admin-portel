import {
  NEWS_DETAIL_REQUEST,
  NEWS_DETAIL_SUCCESS,
  NEWS_DETAIL_FAILURE,
} from "./constants";

const initialState = {
  error: false,
  isFetching: false,
  data: {},
};

const newsDetail = (state = initialState, action) => {
  switch (action.type) {
    case NEWS_DETAIL_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case NEWS_DETAIL_FAILURE:
      return {
        ...state,
        error: true,
        isFetching: false,
      };
    case NEWS_DETAIL_SUCCESS:
      return {
        ...state,
        error: false,
        isFetching: false,
        data: action.data,
      };
    default:
      return state;
  }
};

export default newsDetail;
