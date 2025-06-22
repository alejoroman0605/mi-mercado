import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const accessToken = sessionStorage.getItem("token");

  // Si no hay un token de acceso, redirige al login
  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;