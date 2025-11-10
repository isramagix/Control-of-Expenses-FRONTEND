import React from "react";

export interface TopExpense {
  description: string;
  amount: number;
  date: string;
}

interface TopExpensesProps {
  expenses: TopExpense[];
}

const TopExpenses: React.FC<TopExpensesProps> = ({ expenses }) => (
  <div className="bg-white rounded-lg shadow-md">
    <div className="p-6 border-b border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900">
        Top 5 Gastos del Mes
      </h2>
    </div>
    <div className="p-6">
      <div className="space-y-3">
        {expenses.map((expense, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
          >
            <div>
              <p className="font-medium text-gray-900 text-sm">
                {expense.description}
              </p>
              <p className="text-xs text-gray-600">{expense.date}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-gray-900">${expense.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TopExpenses;
