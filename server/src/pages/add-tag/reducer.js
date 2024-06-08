import { addTag } from "./action";
import {
  ADD_TAG_REQUEST,
  ADD_TAG_SUCCESS,
  ADD_TAG_FAILURE,
} from "./constants";

const initialState = {
  isLoading: false,
};

const addTags = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TAG_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_TAG_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case ADD_TAG_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default addTags;
