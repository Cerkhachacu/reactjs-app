import React, { useEffect, useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./styles.scss";
// import { ICONS } from "../../configs";
import bgLogin from "../../assets/pngs/bg.png";
import logo from "../../assets/pngs/logo.png";
// import { InfiniteScroll } from "../../components";
import { documentTitle } from "../../utils";
import { sampleAction, postRegister } from "../../redux/actions";
import { Reducers } from "../../redux/types";

const Component = () => {
  documentTitle("Register");
  const history = useHistory();
  const dispatch = useDispatch();
  const authState = useSelector((state: Reducers) => state.auth);
  const [registerBody, setregisterBody] = useState({});
  // eslint-disable-next-line no-console
  console.log(registerBody, authState);

  useEffect(() => {
    dispatch(sampleAction());
  }, [dispatch]);

  const _register = useCallback(() => {
    dispatch(postRegister());
  }, [dispatch]);

  const _login = useCallback(() => {
    history.push("/login");
  }, [history]);

  return (
    <div className="page-register">
      <div>
        <img className="bg-image" src={bgLogin} alt="bg-image" />
      </div>
      <div className="container">
        <div className="logo-container">
          <img className="logo-image" src={logo} alt="bg-image" />
        </div>
        <div className="form-container">
          <div className="register-title-container">
            <span className="register-title">Sign Up</span>
          </div>
          <div>
            <div className="input-container">
              <input
                className="input-style"
                placeholder="First Name"
                type="name"
                onChange={(i) =>
                  setregisterBody({
                    ...registerBody,
                    firstName: i.target.value,
                  })
                }
              />
              <input
                className="input-style"
                placeholder="Last Name"
                type="name"
                onChange={(i) =>
                  setregisterBody({ ...registerBody, lastName: i.target.value })
                }
              />
              <input
                className="input-style"
                placeholder="Email"
                type="email"
                onChange={(i) =>
                  setregisterBody({ ...registerBody, email: i.target.value })
                }
              />
              <input
                className="input-style"
                placeholder="Password"
                type="password"
                onChange={(i) =>
                  setregisterBody({ ...registerBody, password: i.target.value })
                }
              />
              <div className="password-strength-bar" />
              <div className="strong-password">
                <span>What is a secure password?</span>
              </div>
              <input
                className="input-style"
                placeholder="Password Confirmation"
                type="password"
                onChange={(i) =>
                  setregisterBody({
                    ...registerBody,
                    cPassword: i.target.value,
                  })
                }
              />
            </div>
            <div className="policy-check-container">
              <input
                type="checkbox"
                id="policy"
                name="policy"
                value="policy"
                className="checkbox"
              />
              <span>I agree to the Nifty </span>
              <a onClick={() => history.push("detail")}>
                <span>Privacy Policy</span>
              </a>
            </div>
            <div className="button-container">
              <button className="button-signup" onClick={_register}>
                Register
              </button>
              <button className="button-login" onClick={_login}>
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
