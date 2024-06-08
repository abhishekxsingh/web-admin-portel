import {
  USER_DETAIL_REQUEST,
  USER_DETAIL_FAILURE,
  USER_DETAIL_SUCCESS,
} from "./constants";

const initialState = {
  isLoading: false,
  error: null,
};

const userDetail = (state = initialState, action) => {
  switch (action.type) {
    case USER_DETAIL_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case USER_DETAIL_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: "Invalid credentials",
      };
    case USER_DETAIL_SUCCESS:
      return {
        ...state,
        ...action.data,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default userDetail;
