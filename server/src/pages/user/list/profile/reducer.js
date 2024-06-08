import {
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAILURE,
} from "./constants";

const initialState = {
  error: false,
  isFetching: false,
  data: {},
  isProfileExist: false,
};

const userProfile = (state = initialState, action) => {
  switch (action.type) {
    case USER_PROFILE_REQUEST:
      return {
        ...state,
        isFetching: true,
        data: [],
      };
    case USER_PROFILE_FAILURE:
      return {
        ...state,
        error: true,
        isFetching: false,
        data: [],
        isProfileExist: false,
      };
    case USER_PROFILE_SUCCESS:
      const { data, pagination } = action.data;
      return {
        ...state,
        error: false,
        isFetching: false,
        data: data,
        isProfileExist: true,
      };
    default:
      return state;
  }
};

export default userProfile;
