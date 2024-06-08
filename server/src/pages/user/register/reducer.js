import { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS } from "./constants";

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  error: null,
};
// reducer function for signin takes state and action as an argument and returns updated state
const signin = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        error: "Invalid credentials",
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};

export default signin;
