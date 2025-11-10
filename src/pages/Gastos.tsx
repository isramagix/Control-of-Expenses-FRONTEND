import { useState } from "react";
import ExpenseFilters from "../modules/expenses/components/ExpenseFilters";
import ExpenseTable from "../modules/expenses/components/ExpenseTable";
import type { Expense } from "../modules/expenses/components/ExpenseTable";
import ExpenseModal from "../modules/expenses/components/ExpenseModal";

const Gastos = () => {
  const [showModal, setShowModal] = useState(false);

  // Datos de ejemplo
  const expenses: Expense[] = [
    {
      id: 1,
      date: "2025-01-15",
      description: "Compra supermercado",
      category: "Alimentación",
      amount: 85.5,
    },
    {
      id: 2,
      date: "2025-01-16",
      description: "Taxi",
      category: "Transporte",
      amount: 20,
    },
    {
      id: 3,
      date: "2025-01-17",
      description: "Cine",
      category: "Entretenimiento",
      amount: 12,
    },
    {
      id: 4,
      date: "2025-01-18",
      description: "Farmacia",
      category: "Salud",
      amount: 30,
    },
    {
      id: 5,
      date: "2025-01-19",
      description: "Cena",
      category: "Alimentación",
      amount: 40,
    },
  ];

  const handleEdit = () => setShowModal(true);
  const handleDelete = () => alert(`Eliminar gasto`);
  const handleSave = () => setShowModal(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Gestión de Gastos</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          ➕ Agregar Gasto
        </button>
      </div>
      <ExpenseFilters />
      <ExpenseTable
        expenses={expenses}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <ExpenseModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleSave}
      />
    </div>
  );
};

export default Gastos;
