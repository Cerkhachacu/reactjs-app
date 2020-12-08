import React, { useEffect, useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./styles.scss";
// import { ICONS } from "../../configs";
import bgLogin from "../../assets/pngs/bg.png";
import logo from "../../assets/pngs/logo.png";
// import { InfiniteScroll } from "../../components";
import { documentTitle } from "../../utils";
import { postLogin, sampleAction } from "../../redux/actions";
import { Reducers } from "../../redux/types";

const Component = () => {
  documentTitle("Login Page");
  const [loginBody, setLoginBody] = useState({});
  const history = useHistory();
  const dispatch = useDispatch();
  const authState = useSelector((state: Reducers) => state.auth);

  useEffect(() => {
    dispatch(sampleAction());
  }, [dispatch]);
  // eslint-disable-next-line no-console
  console.log(authState);
  // const _loadMore = useCallback(() => {
  //   dispatch(sampleAction());
  // }, [dispatch]);
  const _login = useCallback(() => {
    dispatch(postLogin(loginBody));
  }, [dispatch, loginBody]);

  const _register = useCallback(() => {
    history.push("/register");
  }, [history]);
  return (
    <div className="page-login">
      <div>
        <img className="bg-image" src={bgLogin} alt="bg-image" />
      </div>
      <div className="container">
        <div className="logo-container">
          <img className="logo-image" src={logo} alt="bg-image" />
        </div>
        <div className="form-container">
          <div className="login-title-container">
            <span className="login-title">Partner Portal</span>
          </div>
          <div>
            <div className="input-container">
              <input
                className="input-style"
                placeholder="Email"
                type="email"
                onChange={(i) =>
                  setLoginBody({ ...loginBody, email: i.target.value })
                }
              />
              <input
                className="input-style"
                placeholder="Password"
                type="password"
                onChange={(i) =>
                  setLoginBody({ ...loginBody, password: i.target.value })
                }
              />
            </div>
            <div className="policy-check-container">
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  value="remember"
                  className="checkbox"
                />
                <span>Remember me</span>
              </div>
              <div>
                <a onClick={() => history.push("/forgot-password")}>
                  <span>Forgot Password?</span>
                </a>
              </div>
            </div>
            <div className="button-container">
              <button className="button-login" onClick={_login}>
                Login
              </button>
              <button className="button-signup" onClick={_register}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
