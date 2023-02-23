import React from "react";
import { Navigate } from "react-router-dom";

function Login({ islogin, children }) {
  if (!islogin) {
    return <Navigate to={"/"} replace />;
  }
  return children;
}

export default Login;
