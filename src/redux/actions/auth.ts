// import { useHistory } from "react-router-dom";
// import { useCallback } from "react";

import { API } from "../../configs";
import { Dispatch } from "../types";

// get seasons
export const POST_LOGIN_PENDING = "POST_LOGIN_PENDING";
export const POST_LOGIN_SUCCESS = "POST_LOGIN_SUCCESS";
export const POST_LOGIN_ERROR = "POST_LOGIN_ERROR";

export const POST_REGISTER_PENDING = "POST_REGISTER_PENDING";
export const POST_REGISTER_SUCCESS = "POST_REGISTER_SUCCESS";
export const POST_REGISTER_ERROR = "POST_REGISTER_ERROR";

export const EMPTY_AUTH_STATE_PENDING = "EMPTY_AUTH_STATE_PENDING";
export const EMPTY_AUTH_STATE_SUCCESS = "EMPTY_AUTH_STATE_SUCCESS";
export const EMPTY_AUTH_STATE_ERROR = "EMPTY_AUTH_STATE_ERROR";

// const history = useHistory();

// Action for login request
export const postLogin = (credentials?: any) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: POST_LOGIN_PENDING });
    const res = await API.postLogin(credentials);
    dispatch({
      type: POST_LOGIN_SUCCESS,
      payload: { data: res.data },
    });
  } catch (err) {
    if (err.response) {
      dispatch({ type: POST_LOGIN_ERROR, payload: { data: err.response } });
    } else {
      dispatch({ type: POST_LOGIN_ERROR });
    }
  }
};

// Action for register request
export const postRegister = (data?: any) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: POST_REGISTER_PENDING });
    data.role = 2;
    const res = await API.postRegister(data);
    dispatch({
      type: POST_REGISTER_SUCCESS,
      payload: { data: res.data },
    });
  } catch (err) {
    if (err.response) {
      dispatch({ type: POST_REGISTER_ERROR, payload: { data: err.response } });
    } else {
      dispatch({ type: POST_REGISTER_ERROR });
    }
  }
};

export const emptyAuthState = (cb: () => void) => async (
  dispatch: Dispatch
) => {
  try {
    // dispatch({ type: EMPTY_AUTH_STATE_SUCCESS });
    // eslint-disable-next-line no-console
    console.log("action is reach");
    dispatch({
      type: EMPTY_AUTH_STATE_SUCCESS,
      payload: { data: "empty " },
    });
    cb();
  } catch (error) {
    if (error.response) {
      dispatch({
        type: EMPTY_AUTH_STATE_ERROR,
        payload: { data: error.response },
      });
    } else {
      dispatch({ type: EMPTY_AUTH_STATE_ERROR, payload: { data: error } });
    }
  }
};
