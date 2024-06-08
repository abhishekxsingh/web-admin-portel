import {
  CUSTOMER_PROFILE_REQUEST,
  CUSTOMER_PROFILE_SUCCESS,
  CUSTOMER_PROFILE_FAILURE,
} from "./constants";

const initialState = {
  error: false,
  isFetching: false,
  data: {},
  isProfileExist: false,
};

const customerProfile = (state = initialState, action) => {
  switch (action.type) {
    case CUSTOMER_PROFILE_REQUEST:
      return {
        ...state,
        isFetching: true,
        data: [],
      };
    case CUSTOMER_PROFILE_FAILURE:
      return {
        ...state,
        error: true,
        isFetching: false,
        data: [],
        isProfileExist: false,
      };
    case CUSTOMER_PROFILE_SUCCESS:
      return {
        ...state,
        error: false,
        isFetching: false,
        data: action.data,
        isProfileExist: true,
      };
    default:
      return state;
  }
};

export default customerProfile;
