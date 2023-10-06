import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ENV } from "../../config/config";
import GoogleSocialButton from "../google-social-button/google-social-button";
import * as EmailValidator from "email-validator";
import { useDispatch, useSelector } from "react-redux";
import { beforeUser, signUp } from "../user/user.action";
import LogoHeader from "../logo-header/logo-header";
import Loader from "../loader/loader";
const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { googleSocialFlag, createUserAuth } = useSelector(
    (state) => state.user || {}
  );
  const accessToken = localStorage.getItem("accessToken");
  const clientId = ENV.googleClientID;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    if (accessToken) navigate("/studio/pricing");
  }, [accessToken]);
  useEffect(() => {
    if (googleSocialFlag) {
      navigate("/");
      dispatch(beforeUser());
    }
  }, [googleSocialFlag , dispatch]);

  useEffect(() => {
    if (createUserAuth) {
      navigate("/login");
      dispatch(beforeUser());
    }
  }, [createUserAuth , dispatch]);

  const validateEmail = (e) => {
    setEmail(e.target.value);
  };
  const createUser = (e) => {
    e.preventDefault();
    let flag = true;
    let errors = {};
    if (!password) {
      flag = false;
      errors.password = "re-enter Password";
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
      dispatch(signUp(body));
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
              <form onSubmit={createUser}>
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    onChange={(e) => {
                      validateEmail(e);
                    }}
                  />
                  <label htmlFor="floatingInput">Email address</label>
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
                  <label htmlFor="floatingInput">Password</label>
                </div>
                <div className="form-button">
                  <button type="submit" className="">
                    Submit
                  </button>
                </div>
              </form>
              <div>
                <span className="no-account d-flex align-items-center">
                  Don't have an account?
                  <Link to="/login" className="ms-2">
                    Login
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

export default Signup;
