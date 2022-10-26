import React from "react";
import { Navigate } from "react-router-dom";

interface ChildrenType {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: ChildrenType) => {
  let token = localStorage.getItem("token") || "";
  if (token !== "") {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
