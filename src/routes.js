import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";

import { isAuthenticated } from "./services/auth";
import NotFound from "./pages/NotFound";

const PrivateRoute = ({ children, redirect}) => {
  return isAuthenticated() ? children : <Navigate to="/signin" />;
}

const MainRoutes = () => (
  <Router>
    <Routes>
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>}></Route>
      <Route path="*" element={<NotFound/>} />
    </Routes>
  </Router>
);

export default MainRoutes;