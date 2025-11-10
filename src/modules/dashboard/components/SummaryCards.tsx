import React from "react";

export interface SummaryCard {
  label: string;
  value: string;
  color: string;
  icon: string;
}

interface SummaryCardsProps {
  cards: SummaryCard[];
}

const SummaryCards: React.FC<SummaryCardsProps> = ({ cards }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {cards.map((card, idx) => (
      <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">{card.label}</p>
            <p className={`text-2xl font-bold ${card.color}`}>{card.value}</p>
          </div>
          <div className="text-3xl">{card.icon}</div>
        </div>
      </div>
    ))}
  </div>
);

export default SummaryCards;
