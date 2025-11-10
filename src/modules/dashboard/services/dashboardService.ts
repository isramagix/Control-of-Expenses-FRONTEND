import api from "../../../services/api";

export interface DashboardExpense {
  id: number;
  description: string;
  category: string;
  amount: number;
  date: string;
}

export const dashboardService = {
  // Obtener gastos recientes
  async getRecentExpenses(): Promise<DashboardExpense[]> {
    const res = await api.get("/expenses/recent");
    return res.data;
  },

  // Crear gasto
  async createExpense(
    data: Omit<DashboardExpense, "id">
  ): Promise<DashboardExpense> {
    const res = await api.post("/expenses", data);
    return res.data;
  },

  // Editar gasto
  async updateExpense(
    id: number,
    data: Partial<DashboardExpense>
  ): Promise<DashboardExpense> {
    const res = await api.put(`/expenses/${id}`, data);
    return res.data;
  },

  // Eliminar gasto
  async deleteExpense(id: number): Promise<void> {
    await api.delete(`/expenses/${id}`);
  },
};
