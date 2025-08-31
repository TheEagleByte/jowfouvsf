"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

interface RevenueData {
  month: string;
  revenue: number;
  placements: number;
}

interface RevenueChartProps {
  data: RevenueData[];
  className?: string;
}

export function RevenueChart({ data, className = "" }: RevenueChartProps) {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border border-neutral-200">
          <p className="font-medium text-neutral-900 mb-2">{label}</p>
          <div className="space-y-1">
            <p className="text-sm text-primary-green">
              Revenue: ${payload[0].value.toLocaleString()}
            </p>
            <p className="text-sm text-accent-teal">
              Placements: {payload[1]?.value || 0}
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className={`p-6 ${className}`}>
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-neutral-900 mb-2">
          Revenue Over Time
        </h3>
        <p className="text-neutral-600">
          Monthly revenue and placement metrics
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="h-80"
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22C55E" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#22C55E" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#E4E4E7" />
            <XAxis 
              dataKey="month" 
              stroke="#71717A"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="#71717A"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#22C55E"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#revenueGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>
    </Card>
  );
}