import React from "react";

export interface MetricCard {
  icon: string;
  label: string;
  value: string;
  change: string;
  changeColor: string;
}

interface MainMetricsProps {
  metrics: MetricCard[];
}

const MainMetrics: React.FC<MainMetricsProps> = ({ metrics }) => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
    {metrics.map((metric, idx) => (
      <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
        <div className="text-center">
          <div className="text-3xl mb-2">{metric.icon}</div>
          <p className="text-sm text-gray-600">{metric.label}</p>
          <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
          <p className={`text-sm ${metric.changeColor}`}>{metric.change}</p>
        </div>
      </div>
    ))}
  </div>
);

export default MainMetrics;
