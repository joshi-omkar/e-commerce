import React from "react";
import { useAuthContext } from "../context/authContext";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const { token } = useAuthContext();
  const location = useLocation();

  return (
    <>
      {token ? children : <Navigate to="/login" state={{ from: location }} />}
    </>
  );
};

export default RequireAuth;
