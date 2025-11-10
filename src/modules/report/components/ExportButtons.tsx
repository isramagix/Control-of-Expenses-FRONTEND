import React from "react";

const ExportButtons: React.FC = () => (
  <div className="flex space-x-2">
    <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
      📊 Exportar PDF
    </button>
    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
      📈 Exportar Excel
    </button>
  </div>
);

export default ExportButtons;
