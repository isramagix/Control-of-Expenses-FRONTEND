import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Control de Gastos
        </Link>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-blue-200">¡Hola, {user?.name}!</span>
          <Link
            to="/configuracion"
            className="hover:text-blue-200 transition-colors text-sm"
          >
            ⚙️ Configuración
          </Link>
          <button
            onClick={handleLogout}
            className="hover:text-blue-200 transition-colors text-sm bg-blue-700 px-3 py-1 rounded-md hover:bg-blue-800"
          >
            🚪 Cerrar Sesión
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
