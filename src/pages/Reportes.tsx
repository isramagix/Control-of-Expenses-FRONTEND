const Reportes = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Reportes y Análisis</h1>
        <div className="flex space-x-2">
          <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
            📊 Exportar PDF
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            📈 Exportar Excel
          </button>
        </div>
      </div>

      {/* Filtros de periodo */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="monthly">Mensual</option>
            <option value="quarterly">Trimestral</option>
            <option value="yearly">Anual</option>
            <option value="custom">Personalizado</option>
          </select>
          <input
            type="month"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Todas las categorías</option>
            <option value="alimentacion">Alimentación</option>
            <option value="transporte">Transporte</option>
            <option value="entretenimiento">Entretenimiento</option>
          </select>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            🔍 Generar Reporte
          </button>
        </div>
      </div>

      {/* Métricas principales */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-center">
            <div className="text-3xl mb-2">💰</div>
            <p className="text-sm text-gray-600">Gasto Total</p>
            <p className="text-2xl font-bold text-gray-900">$2,450.00</p>
            <p className="text-sm text-red-600">+15% vs mes anterior</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-center">
            <div className="text-3xl mb-2">📊</div>
            <p className="text-sm text-gray-600">Gasto Promedio</p>
            <p className="text-2xl font-bold text-gray-900">$78.71</p>
            <p className="text-sm text-green-600">-5% vs mes anterior</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-center">
            <div className="text-3xl mb-2">🎯</div>
            <p className="text-sm text-gray-600">Categoría Mayor</p>
            <p className="text-2xl font-bold text-gray-900">Alimentación</p>
            <p className="text-sm text-blue-600">$850.00 (34.7%)</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-center">
            <div className="text-3xl mb-2">📈</div>
            <p className="text-sm text-gray-600">Tendencia</p>
            <p className="text-2xl font-bold text-gray-900">Creciente</p>
            <p className="text-sm text-red-600">+8% tendencia mensual</p>
          </div>
        </div>
      </div>

      {/* Gráfico placeholder */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Evolución de Gastos Mensuales</h2>
        </div>
        <div className="p-6">
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">📈</div>
              <p className="text-gray-600">Gráfico de tendencias</p>
              <p className="text-sm text-gray-500">(Se integrará con librería de gráficos)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Distribución por categorías */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Distribución por Categorías</h2>
          </div>
          <div className="p-6">
            <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl mb-2">🍕</div>
                <p className="text-gray-600">Gráfico circular</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Top 5 Gastos del Mes</h2>
          </div>
          <div className="p-6">
            <div className="space-y-3">
              {[
                { description: 'Compra supermercado mayorista', amount: 245.50, date: '15/01' },
                { description: 'Cena restaurante familiar', amount: 180.00, date: '20/01' },
                { description: 'Gasolina del mes', amount: 150.00, date: '05/01' },
                { description: 'Consulta médica especialista', amount: 120.00, date: '12/01' },
                { description: 'Suscripción Netflix + Spotify', amount: 25.98, date: '01/01' },
              ].map((expense, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{expense.description}</p>
                    <p className="text-xs text-gray-600">{expense.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">${expense.amount}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reportes;