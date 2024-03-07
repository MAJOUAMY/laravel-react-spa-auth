import React from "react";
import useAuthContext from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
function GuestLayouts() {
    const { user } = useAuthContext();
    return user ?  <Navigate to="/login" /> :<Outlet />;
}

export default GuestLayouts;
