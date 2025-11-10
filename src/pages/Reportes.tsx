import MainMetrics from "../modules/report/components/MainMetrics";
import EvolutionChart from "../modules/report/components/EvolutionChart";
import CategoryDistribution from "../modules/report/components/CategoryDistribution";
import TopExpenses from "../modules/report/components/TopExpenses";
import ExportButtons from "../modules/report/components/ExportButtons";
import ReportFilters from "../modules/report/components/ReportFilters";
import type { MetricCard } from "../modules/report/components/MainMetrics";
import type { TopExpense } from "../modules/report/components/TopExpenses";

const metrics: MetricCard[] = [
  {
    icon: "💰",
    label: "Gasto Total",
    value: "$2,450.00",
    change: "+15% vs mes anterior",
    changeColor: "text-red-600",
  },
  {
    icon: "📊",
    label: "Gasto Promedio",
    value: "$78.71",
    change: "-5% vs mes anterior",
    changeColor: "text-green-600",
  },
  {
    icon: "🎯",
    label: "Categoría Mayor",
    value: "Alimentación",
    change: "$850.00 (34.7%)",
    changeColor: "text-blue-600",
  },
  {
    icon: "📈",
    label: "Tendencia",
    value: "Creciente",
    change: "+8% tendencia mensual",
    changeColor: "text-red-600",
  },
];

const topExpenses: TopExpense[] = [
  {
    description: "Compra supermercado mayorista",
    amount: 245.5,
    date: "15/01",
  },
  { description: "Cena restaurante familiar", amount: 180.0, date: "20/01" },
  { description: "Gasolina del mes", amount: 150.0, date: "05/01" },
  { description: "Consulta médica especialista", amount: 120.0, date: "12/01" },
  {
    description: "Suscripción Netflix + Spotify",
    amount: 25.98,
    date: "01/01",
  },
];

const Reportes = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Reportes y Análisis
        </h1>
        <ExportButtons />
      </div>

      {/* Filtros de periodo */}
      <ReportFilters />

      {/* Métricas principales */}
      <MainMetrics metrics={metrics} />

      {/* Gráfico de evolución */}
      <EvolutionChart />

      {/* Distribución por categorías y top gastos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CategoryDistribution />
        <TopExpenses expenses={topExpenses} />
      </div>
    </div>
  );
};

export default Reportes;
