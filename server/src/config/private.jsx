//import { lazy } from "react";
import { Navigate } from "react-router-dom";
import User from "../utils/user";
const { isAuthenticated } = new User();

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
