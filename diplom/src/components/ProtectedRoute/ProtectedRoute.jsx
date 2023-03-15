import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
    const location = useLocation()
    
  return (
    <Route>
      {() => {
        if (location.pathname !== "/" || location.pathname !== "/movies" || location.pathname !== "saved-movies" || location.pathname !== "profile" || location.pathname !== "signup" || location.pathname !== "signin") {
            <Redirect to="/not-found" />
        }
      }
      }
    </Route>
  );
};

export default ProtectedRoute;