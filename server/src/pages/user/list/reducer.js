import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAILURE,
} from "./constants";

const initialState = {
  error: false,
  isFetching: false,
  data: [],
  pagination: {},
};

const userList = (state = initialState, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return {
        ...state,
        isFetching: true,
        data: [],
        pagination: {},
      };
    case USER_LIST_FAILURE:
      return {
        ...state,
        error: true,
        isFetching: false,
        data: [],
        pagination: {},
      };
    case USER_LIST_SUCCESS:
      const { data, pagination } = action.data;
      return {
        ...state,
        error: false,
        isFetching: false,
        data: data,
        pagination: pagination,
      };
    default:
      return state;
  }
};

export default userList;
