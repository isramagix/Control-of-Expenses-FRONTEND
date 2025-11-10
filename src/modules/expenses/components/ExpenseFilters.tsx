import React from "react";

const ExpenseFilters: React.FC = () => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <input
        type="text"
        placeholder="Buscar gastos..."
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="">Todas las categorías</option>
        <option value="alimentacion">Alimentación</option>
        <option value="transporte">Transporte</option>
        <option value="entretenimiento">Entretenimiento</option>
        <option value="salud">Salud</option>
      </select>
      <input
        type="date"
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="date"
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  </div>
);

export default ExpenseFilters;
