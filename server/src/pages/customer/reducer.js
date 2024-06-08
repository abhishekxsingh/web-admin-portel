import {
  CUSTOMER_LIST_REQUEST,
  CUSTOMER_LIST_SUCCESS,
  CUSTOMER_LIST_FAILURE,
} from "./constants";

const initialState = {
  error: false,
  isFetching: false,
  data: [],
  pagination: {},
};

const customerList = (state = initialState, action) => {
  switch (action.type) {
    case CUSTOMER_LIST_REQUEST:
      return {
        ...state,
        isFetching: true,
        data: [],
        pagination: {},
      };
    case CUSTOMER_LIST_FAILURE:
      return {
        ...state,
        error: true,
        isFetching: false,
        data: [],
        pagination: {},
      };
    case CUSTOMER_LIST_SUCCESS:
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

export default customerList;
