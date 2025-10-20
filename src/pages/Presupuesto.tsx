const Presupuesto = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Gestión de Presupuesto
        </h1>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
          📊 Configurar Presupuesto
        </button>
      </div>

      {/* Resumen del presupuesto */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Presupuesto Mensual
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Presupuesto Total:</span>
              <span className="font-semibold text-lg text-gray-900">
                $4,000.00
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Gastado:</span>
              <span className="font-semibold text-lg text-red-600">
                $2,450.00
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Restante:</span>
              <span className="font-semibold text-lg text-green-600">
                $1,550.00
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-blue-600 h-3 rounded-full"
                style={{ width: "61.25%" }}
              ></div>
            </div>
            <p className="text-sm text-gray-600">
              61.25% del presupuesto utilizado
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Progreso Semanal
          </h2>
          <div className="space-y-3">
            {[
              { week: "Semana 1", amount: 580, budget: 1000 },
              { week: "Semana 2", amount: 720, budget: 1000 },
              { week: "Semana 3", amount: 650, budget: 1000 },
              { week: "Semana 4", amount: 500, budget: 1000 },
            ].map((week) => (
              <div key={week.week} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-900">
                    {week.week}
                  </span>
                  <span className="text-sm text-gray-600">
                    ${week.amount} / ${week.budget}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      week.amount > week.budget ? "bg-red-500" : "bg-green-500"
                    }`}
                    style={{
                      width: `${Math.min(
                        (week.amount / week.budget) * 100,
                        100
                      )}%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Presupuesto por categoría */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            Presupuesto por Categoría
          </h2>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            {[
              {
                category: "Alimentación",
                budgeted: 1200,
                spent: 850,
                color: "blue",
              },
              {
                category: "Transporte",
                budgeted: 800,
                spent: 650,
                color: "green",
              },
              {
                category: "Entretenimiento",
                budgeted: 600,
                spent: 480,
                color: "purple",
              },
              { category: "Salud", budgeted: 500, spent: 200, color: "red" },
              { category: "Otros", budgeted: 900, spent: 270, color: "yellow" },
            ].map((item) => {
              const percentage = (item.spent / item.budgeted) * 100;
              return (
                <div key={item.category} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-4 h-4 rounded-full bg-${item.color}-500`}
                      ></div>
                      <span className="font-medium text-gray-900">
                        {item.category}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-gray-600">
                        ${item.spent} / ${item.budgeted}
                      </span>
                      <div className="text-xs text-gray-500">
                        {percentage.toFixed(1)}%
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        percentage > 100 ? "bg-red-500" : `bg-${item.color}-500`
                      }`}
                      style={{ width: `${Math.min(percentage, 100)}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presupuesto;
