
// import { Navigate, useLocation } from "react-router";
// import { useContext } from "react";
// import { AuthContext } from "../../contexts/AuthProvider";

import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
    const { user, loading, role } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        <progress className="progress w-56"></progress>
    }

    if (user && role === "admin") {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;