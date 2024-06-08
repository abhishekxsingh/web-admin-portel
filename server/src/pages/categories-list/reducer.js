import {
  NEWS_CATEGORIES_REQUEST,
  NEWS_CATEGORIES_SUCCESS,
  NEWS_CATEGORIES_FAILURE,
} from "./constants";

const initialState = {
  error: false,
  isFetching: false,
  data: [],
  pagination: {},
};

const customerList = (state = initialState, action) => {
  switch (action.type) {
    case NEWS_CATEGORIES_REQUEST:
      return {
        ...state,
        isFetching: true,
        data: [],
        pagination: {},
      };
    case NEWS_CATEGORIES_FAILURE:
      return {
        ...state,
        error: true,
        isFetching: false,
        data: [],
        pagination: {},
      };
    case NEWS_CATEGORIES_SUCCESS:
      const { data, pagination } = action.data;
      const catgoriesDataNew = data.map((i, idx)=>({value: idx+1,label: i.name, ...i}))

      return {
        ...state,
        error: false,
        isFetching: false,
        data: catgoriesDataNew,
        pagination: pagination,
      };
    default:
      return state;
  }
};

export default customerList;
