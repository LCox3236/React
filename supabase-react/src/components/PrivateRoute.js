import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Navigate } from "react-router-dom";

import { useAuth } from "../contexts/Auth";

export function PrivateRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
}
