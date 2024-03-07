import React from "react";
import useAuthContext from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

function AuthLayouts() {
    const { user } = useAuthContext();
    return <>{user ? <Outlet /> : <Navigate to="/login" />}</>;
}

export default AuthLayouts;
