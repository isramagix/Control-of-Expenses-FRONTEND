import React from "react";

export interface BudgetSummaryProps {
  total: number;
  spent: number;
  remaining: number;
  percentUsed: number;
}

const BudgetSummary: React.FC<BudgetSummaryProps> = ({
  total,
  spent,
  remaining,
  percentUsed,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Presupuesto Mensual
      </h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Presupuesto Total:</span>
          <span className="font-semibold text-lg text-gray-900">
            ${total.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Gastado:</span>
          <span className="font-semibold text-lg text-red-600">
            ${spent.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Restante:</span>
          <span className="font-semibold text-lg text-green-600">
            ${remaining.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-blue-600 h-3 rounded-full"
            style={{ width: `${percentUsed}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600">
          {percentUsed.toFixed(2)}% del presupuesto utilizado
        </p>
      </div>
    </div>
  );
};

export default BudgetSummary;
