import React from "react";

export interface CategoryBudget {
  category: string;
  budgeted: number;
  spent: number;
  color: string;
}

interface CategoryBudgetsProps {
  categories: CategoryBudget[];
}

const CategoryBudgets: React.FC<CategoryBudgetsProps> = ({ categories }) => {
  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900">
          Presupuesto por Categoría
        </h2>
      </div>
      <div className="p-6">
        <div className="space-y-6">
          {categories.map((item) => {
            const percentage = (item.spent / item.budgeted) * 100;
            return (
              <div key={item.category} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-4 h-4 rounded-full bg-${item.color}-500`}
                    ></div>
                    <span className="font-medium text-gray-900">
                      {item.category}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-600">
                      ${item.spent} / ${item.budgeted}
                    </span>
                    <div className="text-xs text-gray-500">
                      {percentage.toFixed(1)}%
                    </div>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      percentage > 100 ? "bg-red-500" : `bg-${item.color}-500`
                    }`}
                    style={{ width: `${Math.min(percentage, 100)}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryBudgets;
