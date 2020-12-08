import storage from "redux-persist/lib/storage";

import {
  GET_USER_ERROR,
  GET_USER_PENDING,
  GET_USER_SUCCESS,
  EMPTY_USER_STATE_SUCCESS,
  EMPTY_USER_STATE_ERROR,
  ADD_COUNT_STATE_PENDING,
  ADD_COUNT_STATE_SUCCESS,
  ADD_COUNT_STATE_ERROR,
} from "../actions";
import { Action, UserState } from "../types";

const initialState: UserState = {
  userData: [],
  isLoadingUser: false,
};

export default (state = initialState, { type, payload }: Action) => {
  switch (type) {
    // get users
    case GET_USER_PENDING:
      return { ...state, isLoadingUser: true };
    case GET_USER_SUCCESS:
      return { ...state, isLoadingUser: false, userData: payload.data };
    case GET_USER_ERROR:
      return { ...state, isLoadingUser: false };

    // empty users state
    case EMPTY_USER_STATE_SUCCESS:
      // eslint-disable-next-line no-sequences
      return storage.removeItem("persist:root"), initialState;
    case EMPTY_USER_STATE_ERROR:
      return { isLoadingUser: false };

    // get users
    case ADD_COUNT_STATE_PENDING:
      return { ...state, isLoadingUser: true };
    case ADD_COUNT_STATE_SUCCESS:
      return { ...state, isLoadingUser: false, count: payload.data };
    case ADD_COUNT_STATE_ERROR:
      return { ...state, isLoadingUser: false };
    default:
      return state;
  }
};
