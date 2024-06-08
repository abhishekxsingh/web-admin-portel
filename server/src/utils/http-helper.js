import axios from "axios";
import Storage from "./storage";
import {
  IDENTITY_SERVICE_URL,
  LOGIN_TOKEN_URL,
  REFRESH_TOKEN_URL,
} from "./urls";
import User from "./user";

const { forceLogout } = new User();

const storage = new Storage();

const axiosInstance = axios.create({
  baseURL: IDENTITY_SERVICE_URL,
});

const setAuthorizationHeader = (config, token) => {
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
};

axiosInstance.interceptors.request.use(
  (config) => {
    const refreshToken = storage.get("refreshToken");
    const token = storage.get("token");

    if (Object.keys(refreshToken).length || Object.keys(token).length) {
      const isRefreshTokenRequest = config.url === REFRESH_TOKEN_URL;

      setAuthorizationHeader(
        config,
        isRefreshTokenRequest ? refreshToken : token
      );
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    const {
      status,
      headers,
      config: { url },
    } = response;

    if (
      status === 201 &&
      (url === REFRESH_TOKEN_URL || url === LOGIN_TOKEN_URL)
    ) {
      storage.save("token", headers.token);
      storage.save("refreshToken", headers["refresh-token"]);
    }

    return response;
  },
  async (error) => {
    try {
      const { response } = error;
      if (response) {
        const {
          status,
          data: { message },
          config,
        } = response;

        if (status === 429) {
          return Promise.reject(response);
        }

        if (status === 401) {
          const { url } = config;

          if (url === REFRESH_TOKEN_URL) {
            // Token refresh failed
            forceLogout();
            // window.location.href = "/login";
            throw new Error("Token refresh failed");
          }

          const response = await axiosInstance.get(REFRESH_TOKEN_URL);
          const newToken = response.headers.token;

          if (newToken) {
            storage.save("token", newToken);
          }

          return axiosInstance(error.config);
        }
        return response;
      }

      return Promise.reject(error);
    } catch (err) {
      //forceLogout();
    }
  }
);

class HttpHelper {
  sendRequest = async (args) => {
    const response = await axiosInstance(args);

    return response;
  };

  getRequest = async (args) => {
    const response = await this.sendRequest({
      ...args,
      method: "get",
    });

    const { data, headers, error, status } = response;

    if (status === 200) {
      return {
        data,
        error: null,
        headers,
        status,
      };
    }

    return {
      data,
      error: error || data,
      status,
    };
  };

  postRequest = async (args) => {
    const { data, headers, error, status } = await this.sendRequest({
      ...args,
      method: "post",
    });

    if ([200, 201, 204].indexOf(status) > -1) {
      return {
        data,
        error: null,
        headers,
        status,
      };
    }

    return {
      data: null,
      error: error || data,
      status,
    };
  };

  patchRequest = async (args) => {
    const { data, headers, error, status } = await this.sendRequest({
      ...args,
      method: "patch",
    });

    if (status === 204) {
      return {
        data,
        error: null,
        headers,
        status,
      };
    }

    return {
      data: null,
      error: error || data,
      status,
    };
  };

  deleteRequest = async (args) => {
    const { data, error, status } = await this.sendRequest({
      ...args,
      method: "delete",
    });

    if (status === 204) {
      return {
        data,
        error: null,
        status,
      };
    }

    return {
      data: null,
      error: error || data,
      status,
    };
  };
}
export default HttpHelper;
