import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import LoadingSpinner from "../ui/LoadingSpinner";

interface PublicRouteProps {
  children: React.ReactNode;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const { isAuthenticated, isLoading, initializeAuth } = useAuth();

  useEffect(() => {
    // Inicializar autenticación al montar el componente
    initializeAuth();
  }, [initializeAuth]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isAuthenticated) {
    // Si ya está autenticado, redirigir al dashboard
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default PublicRoute;
