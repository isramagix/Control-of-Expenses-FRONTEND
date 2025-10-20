const Configuracion = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Configuración</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Perfil de usuario */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              Perfil de Usuario
            </h2>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombre completo
              </label>
              <input
                type="text"
                defaultValue="Juan Pérez"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                defaultValue="juan@ejemplo.com"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Moneda preferida
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="USD">Dólar (USD)</option>
                <option value="EUR">Euro (EUR)</option>
                <option value="MXN">Peso Mexicano (MXN)</option>
              </select>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
              💾 Guardar Cambios
            </button>
          </div>
        </div>

        {/* Categorías personalizadas */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              Categorías de Gastos
            </h2>
          </div>
          <div className="p-6">
            <div className="space-y-3 mb-4">
              {[
                "🍕 Alimentación",
                "🚗 Transporte",
                "🎬 Entretenimiento",
                "🏥 Salud",
                "🛒 Compras",
                "⚡ Servicios",
              ].map((category, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <span className="text-gray-900">{category}</span>
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-800 text-sm">
                      ✏️
                    </button>
                    <button className="text-red-600 hover:text-red-800 text-sm">
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
              ➕ Agregar Categoría
            </button>
          </div>
        </div>

        {/* Preferencias de notificaciones */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              Notificaciones
            </h2>
          </div>
          <div className="p-6 space-y-4">
            {[
              { label: "Recordatorios de presupuesto", checked: true },
              { label: "Alertas de gastos excesivos", checked: true },
              { label: "Resumen mensual por email", checked: false },
              { label: "Notificaciones push", checked: true },
            ].map((notification, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-900">{notification.label}</span>
                <input
                  type="checkbox"
                  defaultChecked={notification.checked}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Configuración de presupuesto */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              Configuración de Presupuesto
            </h2>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Presupuesto mensual
              </label>
              <input
                type="number"
                defaultValue="4000"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Día de renovación
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="1">1 de cada mes</option>
                <option value="15">15 de cada mes</option>
                <option value="30">Último día del mes</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Alerta cuando se alcance (%)
              </label>
              <input
                type="number"
                defaultValue="80"
                min="1"
                max="100"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
              💾 Guardar Configuración
            </button>
          </div>
        </div>
      </div>

      {/* Zona de peligro */}
      <div className="bg-white rounded-lg shadow-md border-l-4 border-red-500">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-red-600">
            Zona de Peligro
          </h2>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium text-gray-900">
                Exportar todos los datos
              </h3>
              <p className="text-sm text-gray-600">
                Descarga todos tus datos en formato JSON
              </p>
            </div>
            <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
              📦 Exportar
            </button>
          </div>
          <hr className="border-gray-200" />
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium text-gray-900">
                Eliminar todos los datos
              </h3>
              <p className="text-sm text-gray-600">
                Esta acción no se puede deshacer
              </p>
            </div>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
              🗑️ Eliminar Todo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configuracion;
