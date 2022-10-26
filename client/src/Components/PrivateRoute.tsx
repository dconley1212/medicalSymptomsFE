import React, { Children } from "react";
import { Navigate } from "react-router-dom";

// export type PrivateRouteProps = {
//   token: string;
//   path: string;
//   outlet: JSX.Element;
// };

interface ChildrenType {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: ChildrenType) => {
  let token = localStorage.getItem("token") || "";
  if (token !== "") {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default PrivateRoute;
