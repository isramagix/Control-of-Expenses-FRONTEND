import React from "react";

const DangerZone: React.FC = () => (
  <div className="bg-white rounded-lg shadow-md border-l-4 border-red-500">
    <div className="p-6 border-b border-gray-200">
      <h2 className="text-xl font-semibold text-red-600">Zona de Peligro</h2>
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
);

export default DangerZone;
