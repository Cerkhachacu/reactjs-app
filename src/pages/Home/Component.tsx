import React, { useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./styles.scss";
// import { ICONS } from "../../configs";
// import { InfiniteScroll } from "../../components";
import { documentTitle } from "../../utils";
import { emptyAuthState, sampleAction } from "../../redux/actions";
import { Reducers } from "../../redux/types";

const Component = () => {
  documentTitle("Home");
  const history = useHistory();
  const dispatch = useDispatch();
  const authState = useSelector((state: Reducers) => state.auth);
  // eslint-disable-next-line no-console
  console.log(authState);

  useEffect(() => {
    dispatch(sampleAction());
  }, [dispatch]);

  // const _loadMore = useCallback(() => {
  //   dispatch(sampleAction());
  // }, [dispatch]);
  const _logout = useCallback(() => {
    dispatch(emptyAuthState(() => history.push("login")));
  }, [dispatch, history]);

  return (
    <div>
      <span>Home</span>
      <button onClick={_logout}>Logout</button>
    </div>
  );
};

export default Component;
