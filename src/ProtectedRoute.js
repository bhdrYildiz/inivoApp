import React from "react";
import { useSelector } from "react-redux";
import { Route, redirect, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ path, exact, children }) => {
  const auth = useSelector((store) => store.auth);
  const navigate = useNavigate();

  if (!auth.authentication) {
    // Use logical NOT for clarity
    return redirect("/login");
  }

  return (
    <Route path={path} exact={exact}>
      {children}
    </Route>
  );
};

export default ProtectedRoute;
