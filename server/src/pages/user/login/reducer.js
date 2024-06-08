import { jwtDecode } from "jwt-decode";
import { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS } from "./constants";
import User from "../../../utils/user";

const { getRole } = new User();

const { role } = getRole();


const initialState = {
  isLoading: false,
  isAuthenticated: false,
  role: role,
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
      const { role } = jwtDecode(action.data.token);
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        role
      };
    default:
      return state;
  }
};

export default signin;
