import { API } from "../../configs";
import { Dispatch } from "../types";

// get seasons
export const GET_USER_PENDING = "GET_USER_PENDING";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_ERROR = "GET_USER_ERROR";

export const EMPTY_USER_STATE_SUCCESS = "EMPTY_USR_STATE_SUCCESS";
export const EMPTY_USER_STATE_ERROR = "EMPTY_USR_STATE_ERROR";

export const ADD_COUNT_STATE_PENDING = "ADD_COUNT_STATE_PENDING";
export const ADD_COUNT_STATE_SUCCESS = "ADD_COUNT_STATE_SUCCESS";
export const ADD_COUNT_STATE_ERROR = "ADD_COUNT_STATE_ERROR";

export const getUsers = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_USER_PENDING });
    const res = await API.getUsers();
    dispatch({
      type: GET_USER_SUCCESS,
      payload: { data: res.data },
    });
  } catch (err) {
    if (err.response) {
      dispatch({ type: GET_USER_ERROR, payload: { data: err.response } });
    } else {
      dispatch({ type: GET_USER_ERROR, payload: { data: err } });
    }
  }
};

export const emptyUsersState = () => async (dispatch: Dispatch) => {
  try {
    // eslint-disable-next-line no-console
    console.log("action is reach");
    dispatch({
      type: EMPTY_USER_STATE_SUCCESS,
      payload: { data: "empty " },
    });
  } catch (error) {
    if (error.response) {
      dispatch({
        type: EMPTY_USER_STATE_ERROR,
        payload: { data: error.response },
      });
    } else {
      dispatch({ type: EMPTY_USER_STATE_ERROR, payload: { data: error } });
    }
  }
};

// export const addCount = () => async (
//   dispatch: Dispatch,
//   getState: GetState
// ) => {
//   try {
//     dispatch({ type: ADD_COUNT_STATE_PENDING });
//     // eslint-disable-next-line no-console
//     console.log("action add count");
//     dispatch({
//       type: ADD_COUNT_STATE_SUCCESS,
//       payload: { data: getState().user.count + 1 },
//     });
//   } catch (error) {
//     if (error.response) {
//       dispatch({
//         type: ADD_COUNT_STATE_ERROR,
//         payload: { data: error.response },
//       });
//     } else {
//       dispatch({ type: ADD_COUNT_STATE_ERROR, payload: { data: error } });
//     }
//   }
// };
