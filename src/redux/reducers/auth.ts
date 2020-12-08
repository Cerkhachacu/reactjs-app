import storage from "redux-persist/lib/storage";

import {
  POST_LOGIN_ERROR,
  POST_LOGIN_PENDING,
  POST_LOGIN_SUCCESS,
  EMPTY_AUTH_STATE_ERROR,
  EMPTY_AUTH_STATE_SUCCESS,
} from "../actions";
import { Action, AuthState } from "../types";

const initialState: AuthState = {
  authData: undefined,
  isLoadingAuth: false,
};

export default (state = initialState, { type, payload }: Action) => {
  switch (type) {
    // get season
    case POST_LOGIN_PENDING:
      return { ...state, isLoadingLogin: true };
    case POST_LOGIN_SUCCESS:
      return { ...state, isLoadingLogin: false, authData: payload.data.data };
    case POST_LOGIN_ERROR:
      return { ...state, isLoadingLogin: false };

    // empty users state
    case EMPTY_AUTH_STATE_SUCCESS:
      return (
        storage.removeItem("persist:root"),
        { isLoadingAuth: false, authData: undefined }
      );
    case EMPTY_AUTH_STATE_ERROR:
      return { isLoadingUser: false };
    default:
      return state;
  }
};
