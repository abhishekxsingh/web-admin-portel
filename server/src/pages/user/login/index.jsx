import { useEffect, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signin } from "./action";
import LoginThemeImage from "../../../assets/world-cuate.svg";
import LogoImage from "../../../assets/logo.svg";
//import { userDetail } from "../profile/action";
import { AppSettings } from "../../../config/app-settings";

function LoginV1({ isAuthenticated }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { password } = errors;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const context = useContext(AppSettings);

  useEffect(() => {
    if (isAuthenticated()) {
      return navigate("/dashboard");
    }

    context.handleSetAppHeaderNone(true);
    context.handleSetAppSidebarNone(true);
    context.handleSetAppContentClass("p-0");

    return function cleanUp() {
      context.handleSetAppHeaderNone(false);
      context.handleSetAppSidebarNone(false);
      context.handleSetAppContentClass("");
    };

    // eslint-disable-next-line
  }, []);

  const loginDashboardCallback = () => navigate(`/dashboard`);

  const loginResetPasswordCallback = () => {};
  const handleNotification = (data) => {
  };

  const onSubmit = (data, evt) => {
    if (evt && evt.preventDefault) {
      evt.preventDefault();

      const { email, password } = data;
      if (email && password) {
        signin(
          email,
          password,
          dispatch,
          loginDashboardCallback,
          loginResetPasswordCallback,
          handleNotification
        );
      }
    }
  };

  return (
    // <div className="login login-v2">
    <div className="login login-with-news-feed">
      <div className="news-feed">
        <div
          className="news-image"
        >
          <img src={LoginThemeImage}/>
        </div>
        <div className="news-caption">
          <h4 className="caption-title">
            <b>Unbiasly</b>
          </h4>
          <p>
            {/* Download the Color Admin app for iPhone®, iPad®, and Android™. Lorem ipsum dolor sit amet, consectetur adipiscing elit. */}
          </p>
        </div>
      </div>
      <div className="login-container">
        <div className="login-header">
          <div className="brand">
            <img src={LogoImage} className="w-100 pb-10px" />
          </div>
        </div>
        <div className="login-body">
          <div className="login-content fs-13px">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-floating mb-20px">
                <input
                  type="text"
                  className="form-control fs-13px h-45px"
                  id="emailAddress"
                  placeholder="Email Address"
                  {...register("email", {})}
                />
                <label
                  htmlFor="emailAddress"
                  className="d-flex align-items-center py-0"
                >
                  User Name
                </label>
              </div>
              <div className="form-floating mb-20px">
                <input
                  type="password"
                  className="form-control fs-13px h-45px"
                  id="password"
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required.",
                    minLength: {
                      value: 6,
                      message: "Password must have at least 6 characters.",
                    },
                  })}
                />
                {password && (
                  <p
                    className={
                      "invalid-feedback" && password.message && "display-block"
                    }
                  >
                    {password.message}
                  </p>
                )}
                <label
                  htmlFor="password"
                  className="d-flex align-items-center py-0"
                >
                  Password
                </label>
              </div>
              <div className="form-check mb-20px">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="rememberMe"
                />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember Me
                </label>
              </div>
              <div className="login-buttons">
                <button
                  type="submit"
                  className="btn h-45px btn-theme d-block w-100 btn-lg"
                >
                  Sign me in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginV1;
