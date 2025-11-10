import React from "react";

const categories = [
  "🍕 Alimentación",
  "🚗 Transporte",
  "🎬 Entretenimiento",
  "🏥 Salud",
  "🛒 Compras",
  "⚡ Servicios",
];

const CategoryList: React.FC = () => (
  <div className="bg-white rounded-lg shadow-md">
    <div className="p-6 border-b border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900">
        Categorías de Gastos
      </h2>
    </div>
    <div className="p-6">
      <div className="space-y-3 mb-4">
        {categories.map((category, index) => (
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
);

export default CategoryList;
