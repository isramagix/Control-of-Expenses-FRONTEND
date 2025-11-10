import React from "react";

export interface Expense {
  id: number;
  date: string;
  description: string;
  category: string;
  amount: number;
}

interface ExpenseTableProps {
  expenses: Expense[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const ExpenseTable: React.FC<ExpenseTableProps> = ({
  expenses,
  onEdit,
  onDelete,
}) => (
  <div className="bg-white rounded-lg shadow-md">
    <div className="p-6 border-b border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900">Lista de Gastos</h2>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="text-left py-3 px-6 font-medium text-gray-900">
              Fecha
            </th>
            <th className="text-left py-3 px-6 font-medium text-gray-900">
              Descripción
            </th>
            <th className="text-left py-3 px-6 font-medium text-gray-900">
              Categoría
            </th>
            <th className="text-left py-3 px-6 font-medium text-gray-900">
              Monto
            </th>
            <th className="text-left py-3 px-6 font-medium text-gray-900">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {expenses.map((expense) => (
            <tr key={expense.id} className="hover:bg-gray-50">
              <td className="py-4 px-6 text-gray-900">{expense.date}</td>
              <td className="py-4 px-6 text-gray-900">{expense.description}</td>
              <td className="py-4 px-6">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                  {expense.category}
                </span>
              </td>
              <td className="py-4 px-6 font-medium text-gray-900">
                ${expense.amount}
              </td>
              <td className="py-4 px-6">
                <div className="flex space-x-2">
                  <button
                    className="text-blue-600 hover:text-blue-800 text-sm"
                    onClick={() => onEdit(expense.id)}
                  >
                    ✏️ Editar
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800 text-sm"
                    onClick={() => onDelete(expense.id)}
                  >
                    🗑️ Eliminar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default ExpenseTable;
