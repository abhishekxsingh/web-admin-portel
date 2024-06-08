import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
} from "./constants";

const initialState = {
  error: false,
  isFetching: false,
  data: [],
  pagination: {},
};

const userList = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER_REQUEST:
      return {
        ...state,
        isFetching: true,
        data: [],
        pagination: {},
      };
    case CREATE_USER_FAILURE:
      return {
        ...state,
        error: true,
        isFetching: false,
        data: [],
        pagination: {},
      };
    case CREATE_USER_SUCCESS:
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
