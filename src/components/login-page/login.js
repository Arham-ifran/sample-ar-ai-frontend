import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ENV } from "../../config/config";
import GoogleSocialButton from "../google-social-button/google-social-button";
import { GoogleOAuthProvider } from "@react-oauth/google";
import * as EmailValidator from "email-validator";
import { beforeUser, logIn } from "../user/user.action";
import LogoHeader from "../logo-header/logo-header";
import Loader from "../loader/loader";

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const getUserAuth = useSelector((state)=>state.user?.getUserAuth)
  const accessToken = localStorage.getItem("accessToken");
  const clientId = ENV.googleClientID;
  const [email, setEmail] = useState("");
  const [error, setError] = useState({});
  const [password, setPassword] = useState("");
  useEffect(() => {
    if (accessToken) navigate("/studio/pricing");
  }, [accessToken]);
  useEffect(() => {
    if (getUserAuth) {
      navigate("/");
      dispatch(beforeUser());
    }
  }, [getUserAuth , dispatch]);

  const logInHandler = (e) => {
    e.preventDefault();
    let flag = true;
    let errors = {};
    if (!password || password.length < 5) {
      flag = false;
      errors.password = "Password length should be greater than 4";
    }
    if (!EmailValidator.validate(email)) {
      flag = false;
      errors.email = "re-enter Email";
    }
    if (flag) {
      let body = {};
      body.type = 3;
      body.email = email;
      body.password = password;
      dispatch(logIn(body));
    } else {
      setError(errors);
    }
  };

  return (
    <>
      {accessToken ? (
        <Loader />
      ) : (
        <GoogleOAuthProvider clientId={clientId}>
          <div className="login-page">
            <div className="login-card">
              <LogoHeader />
              <form onSubmit={logInHandler}>
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label for="floatingInput">Email address</label>
                  {error?.email ? (
                    <div className="text-danger">
                      <span>{error.email}</span>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingInput"
                    placeholder="*******"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <label for="floatingInput">Password</label>
                  {error?.password ? (
                    <div>
                      <span className="text-danger">{error.password}</span>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
                <div className="form-button">
                  <button type="submit" className="">
                    Continue
                  </button>
                </div>
              </form>
              <div>
                <span className="no-account d-flex align-items-center">
                  <Link to="/forgot-password">Forgot password?</Link>
                </span>
              </div>
              <div>
                <span className="no-account d-flex align-items-center">
                  Don't have an account?
                  <Link to="/signup" className="ms-2">
                    Sign up
                  </Link>
                </span>
              </div>
              <div className="or-tag">
                <span>Or</span>
              </div>
              <div className="social-button">
                <GoogleSocialButton />
              </div>
            </div>
          </div>
        </GoogleOAuthProvider>
      )}
    </>
  );
};

export default Login;
