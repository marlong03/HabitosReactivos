import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

const ProtectedRoutes = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
