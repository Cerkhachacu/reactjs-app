import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

// import {Container} from
import { Reducers } from "../redux/types";
// screens
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Login from "../pages/Login";
import Register from "../pages/Register";

import CustomRoute from "./CustomRoute";

const App = () => {
  const authState = useSelector((state: Reducers) => state.auth);
  const listPage = [
    {
      url: "/home",
      component: <Home />,
    },
    {
      url: "/detail",
      component: <Detail />,
    },
  ];

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to={authState.authData ? "home" : "login"} />
        </Route>
        <CustomRoute path="/login" exact={false} privateMode={false}>
          <Login />
        </CustomRoute>
        <CustomRoute path="/register" exact={false} privateMode={false}>
          <Register />
        </CustomRoute>
        {listPage.map((item, index) => (
          <CustomRoute path={item.url} exact key={index}>
            {item.component}
          </CustomRoute>
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
