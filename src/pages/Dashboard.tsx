import SummaryCards from "../modules/dashboard/components/SummaryCards";
import RecentExpenses from "../modules/dashboard/components/RecentExpenses";
import type { SummaryCard } from "../modules/dashboard/components/SummaryCards";
import type { RecentExpense } from "../modules/dashboard/components/RecentExpenses";

const summaryCards: SummaryCard[] = [
  {
    label: "Gastos del Mes",
    value: "$2,450.00",
    color: "text-gray-900",
    icon: "💸",
  },
  {
    label: "Presupuesto Restante",
    value: "$1,550.00",
    color: "text-green-600",
    icon: "💰",
  },
  {
    label: "Ahorro del Mes",
    value: "$800.00",
    color: "text-blue-600",
    icon: "🏦",
  },
];

const recentExpenses: RecentExpense[] = [
  {
    id: 1,
    description: "Supermercado",
    category: "Alimentación",
    amount: 85.5,
    timeAgo: "Hace 2 horas",
    icon: "🛒",
  },
  {
    id: 2,
    description: "Taxi",
    category: "Transporte",
    amount: 20,
    timeAgo: "Hace 5 horas",
    icon: "🚕",
  },
  {
    id: 3,
    description: "Cine",
    category: "Entretenimiento",
    amount: 12,
    timeAgo: "Ayer",
    icon: "🎬",
  },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Nuevo Gasto
        </button>
      </div>
      <SummaryCards cards={summaryCards} />
      <RecentExpenses expenses={recentExpenses} />
    </div>
  );
};

export default Dashboard;
