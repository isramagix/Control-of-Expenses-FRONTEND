import React from "react";

const ReportFilters: React.FC = () => (
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
);

export default ReportFilters;
