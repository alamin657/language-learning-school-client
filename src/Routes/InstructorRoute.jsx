import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const InstructorRoute = ({ children }) => {
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

export default InstructorRoute;