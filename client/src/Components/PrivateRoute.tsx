import React from "react";
import { Navigate } from "react-router-dom";

type PrivateRouteProps = {
  isAuthenticated: boolean;
  path: string;
  outlet: JSX.Element;
};

const PrivateRoute = ({ isAuthenticated, path, outlet }: PrivateRouteProps) => {
  if (isAuthenticated) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: path }} />;
  }
};

export default PrivateRoute;
