import React from "react";

const CategoryDistribution: React.FC = () => (
  <div className="bg-white rounded-lg shadow-md">
    <div className="p-6 border-b border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900">
        Distribución por Categorías
      </h2>
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
);

export default CategoryDistribution;
