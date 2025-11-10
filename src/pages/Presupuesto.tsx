import BudgetSummary from "../modules/budget/components/BudgetSummary";
import WeeklyProgress from "../modules/budget/components/WeeklyProgress";
import CategoryBudgets from "../modules/budget/components/CategoryBudgets";
import type { WeekProgress } from "../modules/budget/components/WeeklyProgress";
import type { CategoryBudget } from "../modules/budget/components/CategoryBudgets";

const budgetTotal = 4000;
const budgetSpent = 2450;
const budgetRemaining = budgetTotal - budgetSpent;
const percentUsed = (budgetSpent / budgetTotal) * 100;

const weeks: WeekProgress[] = [
  { week: "Semana 1", amount: 580, budget: 1000 },
  { week: "Semana 2", amount: 720, budget: 1000 },
  { week: "Semana 3", amount: 650, budget: 1000 },
  { week: "Semana 4", amount: 500, budget: 1000 },
];

const categories: CategoryBudget[] = [
  { category: "Alimentación", budgeted: 1200, spent: 850, color: "blue" },
  { category: "Transporte", budgeted: 800, spent: 650, color: "green" },
  { category: "Entretenimiento", budgeted: 600, spent: 480, color: "purple" },
  { category: "Salud", budgeted: 500, spent: 200, color: "red" },
  { category: "Otros", budgeted: 900, spent: 270, color: "yellow" },
];

const Presupuesto = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Gestión de Presupuesto
        </h1>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
          📊 Configurar Presupuesto
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BudgetSummary
          total={budgetTotal}
          spent={budgetSpent}
          remaining={budgetRemaining}
          percentUsed={percentUsed}
        />
        <WeeklyProgress weeks={weeks} />
      </div>
      <CategoryBudgets categories={categories} />
    </div>
  );
};

export default Presupuesto;
