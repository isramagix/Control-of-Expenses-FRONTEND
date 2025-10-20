import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import LoadingSpinner from "../ui/LoadingSpinner";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, isLoading, initializeAuth } = useAuth();
  const location = useLocation();

  useEffect(() => {
    // Inicializar autenticación al montar el componente
    initializeAuth();
  }, [initializeAuth]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!isAuthenticated) {
    // Redirigir al login manteniendo la ruta actual para después del login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
