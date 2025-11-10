import React from "react";

const BudgetSettings: React.FC = () => (
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
);

export default BudgetSettings;
