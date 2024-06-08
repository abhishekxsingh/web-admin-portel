import {
  ADD_CATEGORY_REQUEST,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILURE,
} from "./constants";

const initialState = {
  isLoading: false,
};

const addCategory = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_CATEGORY_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default addCategory;
