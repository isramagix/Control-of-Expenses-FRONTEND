import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navItems = [
    { path: "/", name: "Dashboard", icon: "🏠" },
    { path: "/gastos", name: "Gastos", icon: "💰" },
    { path: "/presupuesto", name: "Presupuesto", icon: "📊" },
    { path: "/reportes", name: "Reportes", icon: "📈" },
    { path: "/configuracion", name: "Configuración", icon: "⚙️" },
  ];

  return (
    <aside className="w-64 bg-white shadow-md min-h-screen">
      <nav className="p-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-blue-50 text-blue-600 border-r-2 border-blue-600"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
