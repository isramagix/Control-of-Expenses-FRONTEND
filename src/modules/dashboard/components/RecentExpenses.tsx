import React from "react";

export interface RecentExpense {
  id: number;
  description: string;
  category: string;
  amount: number;
  timeAgo: string;
  icon: string;
}

interface RecentExpensesProps {
  expenses: RecentExpense[];
}

const RecentExpenses: React.FC<RecentExpensesProps> = ({ expenses }) => (
  <div className="bg-white rounded-lg shadow-md">
    <div className="p-6 border-b border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900">Gastos Recientes</h2>
    </div>
    <div className="p-6">
      <div className="space-y-4">
        {expenses.map((expense) => (
          <div
            key={expense.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center space-x-4">
              <div className="text-2xl">{expense.icon}</div>
              <div>
                <p className="font-medium text-gray-900">
                  {expense.description}
                </p>
                <p className="text-sm text-gray-600">{expense.category}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-gray-900">
                -{`$${expense.amount}`}
              </p>
              <p className="text-sm text-gray-600">{expense.timeAgo}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default RecentExpenses;
