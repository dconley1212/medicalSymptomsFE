import React from "react";
import { Navigate } from "react-router-dom";

export type PrivateRouteProps = {
  token: string;
  path: string;
  outlet: JSX.Element;
};

const PrivateRoute = ({ token, path, outlet }: PrivateRouteProps) => {
  if (token !== "") {
    return outlet;
  } else {
    return <Navigate to={{ pathname: path }} />;
  }
};

export default PrivateRoute;
