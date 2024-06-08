import {
  ROLE_REQUEST,
  ROLE_SUCCESS,
  ROLE_FAILURE,
} from "./constants";

const initialState = {
  error: false,
  isFetching: false,
  data: [],
};

const role = (state = initialState, action) => {
  switch (action.type) {
    case ROLE_REQUEST:
      return {
        ...state,
        isFetching: true,
        data: [],
      };
    case ROLE_FAILURE:
      return {
        ...state,
        error: true,
        isFetching: false,
        data: [],
      };
    case ROLE_SUCCESS:
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

export default role;
