import React from "react";
import { Navigate } from "react-router-dom";

interface AuthInterface {
  element: JSX.Element;
}

const AuthRoute: React.FC<AuthInterface> = ({ element }) => {
  if (!!localStorage.getItem("token")) return <div>{element}</div>;
  return <Navigate to={"/"} />;
};

export default AuthRoute;
