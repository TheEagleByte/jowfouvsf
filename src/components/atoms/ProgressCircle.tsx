"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ProgressCircleProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
  children?: React.ReactNode;
}

export function ProgressCircle({
  percentage,
  size = 120,
  strokeWidth = 8,
  className = "",
  children,
}: ProgressCircleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div
      ref={ref}
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          className="fill-none stroke-neutral-200"
        />
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          className="fill-none stroke-primary-green"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: percentage / 100 } : {}}
          transition={{ duration: 2, ease: "easeInOut" }}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: isInView ? offset : circumference,
          }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        {children || (
          <span className="text-2xl font-semibold text-neutral-900">
            {percentage}%
          </span>
        )}
      </div>
    </div>
  );
}