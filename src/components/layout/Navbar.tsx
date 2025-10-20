import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Control de Gastos
        </Link>
        <div className="flex space-x-4">
          <Link to="/profile" className="hover:text-blue-200 transition-colors">
            Perfil
          </Link>
          <button className="hover:text-blue-200 transition-colors">
            Cerrar Sesión
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;