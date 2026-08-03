"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { useOpportunityStore } from "@/store/opportunity-store";

const COLORS = [
  "#3b82f6",
  "#22c55e",
  "#a855f7",
  "#eab308",
  "#14b8a6",
  "#f97316",
  "#ec4899",
];

export default function CategoryChart() {
  const opportunities = useOpportunityStore((state) => state.opportunities);

  const categoryCount: Record<string, number> = {};
  opportunities.forEach((opp) => {
    categoryCount[opp.category] = (categoryCount[opp.category] || 0) + 1;
  });

  const data = Object.entries(categoryCount).map(([name, value]) => ({
    name,
    value,
  }));

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-4">Opportunities by Category</h2>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
              animationBegin={0}
              animationDuration={800}
            >
              {data.map((entry, index) => (
                <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "#1f2937",
                border: "none",
                borderRadius: "12px",
                color: "#fff",
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
