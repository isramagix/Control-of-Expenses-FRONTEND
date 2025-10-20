const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Nuevo Gasto
        </button>
      </div>

      {/* Resumen de gastos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Gastos del Mes</p>
              <p className="text-2xl font-bold text-gray-900">$2,450.00</p>
            </div>
            <div className="text-3xl">💸</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Presupuesto Restante</p>
              <p className="text-2xl font-bold text-green-600">$1,550.00</p>
            </div>
            <div className="text-3xl">💰</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Ahorro del Mes</p>
              <p className="text-2xl font-bold text-blue-600">$800.00</p>
            </div>
            <div className="text-3xl">🏦</div>
          </div>
        </div>
      </div>

      {/* Gastos recientes */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            Gastos Recientes
          </h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">🛒</div>
                  <div>
                    <p className="font-medium text-gray-900">Supermercado</p>
                    <p className="text-sm text-gray-600">Alimentación</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">-$85.50</p>
                  <p className="text-sm text-gray-600">Hace 2 horas</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
