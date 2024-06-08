import { jwtDecode } from "jwt-decode";
import Storage from "./storage";
import { STORAGE_KEY } from "../constants";

class User {
  constructor() {
    this.storage = new Storage();
  }

  isAuthenticated = () => {
    const userToken = this.getUserToken();

    if (!Object.keys(userToken).length) {
      return false;
    }
    return true;
  };

  getRole = () => {
    const userToken = this.getUserToken();
    
    if (userToken.length) {
      const decoded = jwtDecode(userToken);
      return decoded;
    }
    return {};
  };

  getUserToken = () => this.storage.get("token");

  signOut = ({ navigate }) => {
    this.storage.delete(STORAGE_KEY);
    this.forceLogout();
    navigate("/login");
    //this.userManager.signoutRedirect();
  };

  forceLogout = () => {
    this.storage.delete("token");
    this.storage.delete("refreshToken");
    window.location = '/login';
  };
}

export default User;
