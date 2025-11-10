import React from "react";

interface ExpenseModalProps {
  open: boolean;
  onClose: () => void;
  onSave: () => void;
}

const ExpenseModal: React.FC<ExpenseModalProps> = ({
  open,
  onClose,
  onSave,
}) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h3 className="text-lg font-semibold mb-4">Agregar Nuevo Gasto</h3>
        <p className="text-gray-600 mb-4">Formulario de gasto aquí...</p>
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Cancelar
          </button>
          <button
            onClick={onSave}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpenseModal;
