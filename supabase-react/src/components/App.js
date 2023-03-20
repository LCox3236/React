import "./App.css";
import { useState, useEffect, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Dashboard } from "./Dashboard";
import { ResetPassword } from "./ResetPassword";

import { AuthProvider } from "../contexts/Auth";

export function App() {
  return (
    <div>
      <h1>supabase-auth-react</h1>

      {/* Add routes here👇 */}
      <Router>
        <Fragment>
          <AuthProvider>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/resetPassword" element={<ResetPassword />} />
            </Routes>
          </AuthProvider>
        </Fragment>
      </Router>
    </div>
  );
}
