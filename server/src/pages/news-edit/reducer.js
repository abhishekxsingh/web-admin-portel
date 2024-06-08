import {
  NEWS_EDIT_REQUEST,
  NEWS_EDIT_SUCCESS,
  NEWS_EDIT_FAILURE,
} from "./constants";

const initialState = {
  error: false,
  isFetching: false,
  data: {},
};

const customerProfile = (state = initialState, action) => {
  switch (action.type) {
    case NEWS_EDIT_REQUEST:
      return {
        ...state,
        isFetching: true,
        data: [],
      };
    case NEWS_EDIT_FAILURE:
      return {
        ...state,
        error: true,
        isFetching: false,
        data: {},
      };
    case NEWS_EDIT_SUCCESS:
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

export default customerProfile;
