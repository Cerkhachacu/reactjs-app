import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { useSelector } from "react-redux";

// import { STORAGE } from "../configs";
import { Reducers } from "../redux/types";

interface Props {
  privateMode?: boolean;
}

const CustomRoute = ({
  privateMode,
  children,
  ...props
}: Partial<RouteProps & Props>) => {
  const authState = useSelector((state: Reducers) => state.auth);
  const renderPage = () => {
    if (privateMode) {
      return authState.authData !== undefined ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: "/",
          }}
        />
      );
    }

    return !(authState.authData !== undefined) ? (
      children
    ) : (
      <Redirect
        to={{
          pathname: "/",
        }}
      />
    );
  };

  return <Route {...props}>{renderPage}</Route>;
};

CustomRoute.defaultProps = {
  privateMode: true,
};

export default CustomRoute;
