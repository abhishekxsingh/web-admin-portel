import { useEffect, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signin } from "./action";
import { AppSettings } from "../../../../config/app-settings";

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

  const loginDashboardCallback = () => {
    navigate(`/dashboard`);
  };

  const loginResetPasswordCallback = () => {
    //props.history.push("/set-password");
  };

  const onSubmit = (data, evt) => {
    evt.preventDefault(); // No need to check for evt.preventDefault existence

    // Perform any necessary actions with form data here
    const { email, password } = data;
    if (email && password) {
      signin(
        email,
        password,
        dispatch,
        loginDashboardCallback,
        loginResetPasswordCallback
      );
    }
  };

  return (
    <div className="login login-v1">
      <div className="login-container">
        <div className="login-header">
          <div className="brand">
            <div className="d-flex align-items-center">
              <span className="logo"></span> <b>Color</b> Admin
            </div>
            <small>Bootstrap 5 Responsive Admin Template</small>
          </div>
          <div className="icon">
            <i className="fa fa-lock"></i>
          </div>
        </div>
        <div className="login-body">
          <div className="login-content fs-13px">
            {/* <Form onSubmit={handleSubmit}> */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-floating mb-20px">
                <input
                  type="text"
                  className="form-control fs-13px h-45px"
                  id="emailAddress"
                  placeholder="Email Address"
                  {...register("email", {
                    // pattern: {
                    //   message: "Invalid email",
                    //   value: /^[a-zA-Z0-9+_.-]+@?eazyfin|finmapp|airpay\.com+$/,
                    // },
                    // required: true,
                  })}
                />
                {/* {errors.email && errors.email.type === "required" && (
                  <p className="errorMsg">Email is required.</p>
                )}
                {errors.email && errors.email.type === "pattern" && (
                  <p className="errorMsg">Email is not valid.</p>
                )} */}
                <label
                  htmlFor="emailAddress"
                  className="d-flex align-items-center py-0"
                >
                  Email Address
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
