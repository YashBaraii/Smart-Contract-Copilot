
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Access Control Issues', value: 35, color: '#3B82F6' },
  { name: 'Reentrancy Attacks', value: 20, color: '#6366F1' },
  { name: 'Input Validation Errors', value: 25, color: '#8B5CF6' },
  { name: 'Transaction Abuse', value: 15, color: '#06B6D4' },
  { name: 'Auditing Failures', value: 5, color: '#10B981' },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 shadow-lg rounded-lg border border-gray-100">
        <p className="font-medium">{payload[0].name}</p>
        <p className="text-gray-600">{`${payload[0].value}% of vulnerabilities`}</p>
      </div>
    );
  }
  return null;
};

const SecurityChart = () => {
  return (
    <div className="w-full h-80 md:h-96">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SecurityChart;
