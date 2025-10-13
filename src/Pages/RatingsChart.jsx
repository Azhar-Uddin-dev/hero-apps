import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LabelList,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts'

const RatingsChart = () => {
  const ratings = [
    { name: '1 star', count: 70 },
    { name: '2 star', count: 120 },
    { name: '3 star', count: 260 },
    { name: '4 star', count: 420 },
    { name: '5 star', count: 550 },
  ]

  return (
    <div className="w-full h-72 bg-base-100 border rounded-xl shadow-sm p-4">
      <h3 className="font-semibold text-lg mb-2 border-b pb-1">Ratings</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={ratings}
          margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />
          <Tooltip cursor={{ fill: '#f5f5f5' }} />

          {/* Reference line (optional) */}
          <ReferenceLine x={400} stroke="red" label={{ value: '402', fill: 'red', position: 'top' }} />

          {/* Orange bars with count labels */}
          <Bar dataKey="count" fill="orange" radius={[4, 4, 4, 4]}>
            <LabelList dataKey="count" position="right" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default RatingsChart
