import {
  NEWS_ADD_TAG_REQUEST,
  NEWS_ADD_TAG_SUCCESS,
  NEWS_ADD_TAG_FAILURE,
} from "./constants";

const initialState = {
  error: false,
  isFetching: false,
  data: [],
  pagination: {},
};

const customerList = (state = initialState, action) => {
  switch (action.type) {
    case NEWS_ADD_TAG_REQUEST:
      return {
        ...state,
        isFetching: true,
        data: [],
        pagination: {},
      };
    case NEWS_ADD_TAG_FAILURE:
      return {
        ...state,
        error: true,
        isFetching: false,
        data: [],
        pagination: {},
      };
    case NEWS_ADD_TAG_SUCCESS:
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
