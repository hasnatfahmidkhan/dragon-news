import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loader from "../Compnents/Loader/Loader";

const PrivateRoutes = ({ children }) => {
  const { user, userLoading } = use(AuthContext);
  const location = useLocation();

  if (userLoading) {
    return <Loader className={"h-screen"} />;
  }

  if (user && user.email) {
    return children;
  }

  return <Navigate to={"/auth/login"} state={location.pathname} />;
};

export default PrivateRoutes;
