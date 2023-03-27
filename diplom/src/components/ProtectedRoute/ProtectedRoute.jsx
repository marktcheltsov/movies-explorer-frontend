import React from "react";
import { Route, Redirect, useHistory } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
  let history = useHistory()
  return (
    <Route>
      {() =>
        props.loggedIn ? <Component {...props}/> : <Redirect to="/" />
      }
    </Route>
  );
};

export default ProtectedRoute;