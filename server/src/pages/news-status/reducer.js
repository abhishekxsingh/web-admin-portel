import {
  NEWS_STATUS_REQUEST,
  NEWS_STATUS_SUCCESS,
  NEWS_STATUS_FAILURE,
} from "./constants";

const initialState = {
  isLoading: false,
};

const newsStatus = (state = initialState, action) => {
  switch (action.type) {
    case NEWS_STATUS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case NEWS_STATUS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case NEWS_STATUS_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default newsStatus;
