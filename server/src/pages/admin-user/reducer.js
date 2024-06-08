import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
} from "./constants";

const initialState = {
  data:{},
  errors:[],
  isLoading: false
};

const createUser = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER_REQUEST:
      return {
        ...state,
        errors:[],
        isLoading: true
      };
    case CREATE_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors:action.data,
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        errors:[],
        data:action.data,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default createUser;
