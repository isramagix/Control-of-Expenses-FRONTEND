import React from "react";

const EvolutionChart: React.FC = () => (
  <div className="bg-white rounded-lg shadow-md">
    <div className="p-6 border-b border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900">
        Evolución de Gastos Mensuales
      </h2>
    </div>
    <div className="p-6">
      <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-2">📈</div>
          <p className="text-gray-600">Gráfico de tendencias</p>
          <p className="text-sm text-gray-500">
            (Se integrará con librería de gráficos)
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default EvolutionChart;
