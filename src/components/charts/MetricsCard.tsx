"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { AnimatedCounter } from "@/components/atoms/AnimatedCounter";

interface MetricsCardProps {
  title: string;
  value: number;
  suffix?: string;
  prefix?: string;
  change?: number;
  icon: LucideIcon;
  color?: string;
  className?: string;
}

export function MetricsCard({
  title,
  value,
  suffix = "",
  prefix = "",
  change,
  icon: Icon,
  color = "bg-primary-green",
  className = "",
}: MetricsCardProps) {
  const isPositive = change && change > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Card className={`p-6 hover:shadow-lg transition-shadow duration-200 ${className}`}>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-neutral-600 text-sm font-medium mb-1">
              {title}
            </p>
            <div className="flex items-baseline">
              <span className="text-2xl sm:text-3xl font-bold text-neutral-900">
                {prefix}
                <AnimatedCounter value={value} suffix={suffix} />
              </span>
              {change !== undefined && (
                <span
                  className={`ml-2 text-sm font-medium ${
                    isPositive ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {isPositive ? "+" : ""}{change}%
                </span>
              )}
            </div>
          </div>
          
          <motion.div
            className={`p-3 rounded-xl ${color}`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Icon className="w-6 h-6 text-white" />
          </motion.div>
        </div>

        {change !== undefined && (
          <div className="mt-4">
            <div className="flex items-center">
              <div
                className={`w-full bg-neutral-100 rounded-full h-1.5 ${
                  isPositive ? "bg-green-100" : "bg-red-100"
                }`}
              >
                <motion.div
                  className={`h-1.5 rounded-full ${
                    isPositive ? "bg-green-500" : "bg-red-500"
                  }`}
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(Math.abs(change) * 2, 100)}%` }}
                  transition={{ delay: 0.5, duration: 1 }}
                />
              </div>
            </div>
          </div>
        )}
      </Card>
    </motion.div>
  );
}