import React from "react";

export interface WeekProgress {
  week: string;
  amount: number;
  budget: number;
}

interface WeeklyProgressProps {
  weeks: WeekProgress[];
}

const WeeklyProgress: React.FC<WeeklyProgressProps> = ({ weeks }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Progreso Semanal
      </h2>
      <div className="space-y-3">
        {weeks.map((week) => {
          const percent = Math.min((week.amount / week.budget) * 100, 100);
          return (
            <div key={week.week} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-900">
                  {week.week}
                </span>
                <span className="text-sm text-gray-600">
                  ${week.amount} / ${week.budget}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    week.amount > week.budget ? "bg-red-500" : "bg-green-500"
                  }`}
                  style={{ width: `${percent}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeeklyProgress;
