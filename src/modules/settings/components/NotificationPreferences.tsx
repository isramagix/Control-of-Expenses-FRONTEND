import React from "react";

const notifications = [
  { label: "Recordatorios de presupuesto", checked: true },
  { label: "Alertas de gastos excesivos", checked: true },
  { label: "Resumen mensual por email", checked: false },
  { label: "Notificaciones push", checked: true },
];

const NotificationPreferences: React.FC = () => (
  <div className="bg-white rounded-lg shadow-md">
    <div className="p-6 border-b border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900">Notificaciones</h2>
    </div>
    <div className="p-6 space-y-4">
      {notifications.map((notification, index) => (
        <div key={index} className="flex items-center justify-between">
          <span className="text-gray-900">{notification.label}</span>
          <input
            type="checkbox"
            defaultChecked={notification.checked}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
        </div>
      ))}
    </div>
  </div>
);

export default NotificationPreferences;
