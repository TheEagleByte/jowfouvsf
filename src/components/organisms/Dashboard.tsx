"use client";

import { motion } from "framer-motion";
import { DollarSign, Users, Clock, Target, TrendingUp, Award } from "lucide-react";
import { Container } from "@/components/atoms/Container";
import { RevenueChart } from "@/components/charts/RevenueChart";
import { MetricsCard } from "@/components/charts/MetricsCard";
import { ProgressCircle } from "@/components/atoms/ProgressCircle";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { 
  REVENUE_DATA, 
  PERFORMANCE_METRICS, 
  TOP_BROKERS, 
  RECENT_ACTIVITIES 
} from "@/lib/data/dashboard";
import { ANIMATION_VARIANTS } from "@/lib/constants";

export function Dashboard() {
  return (
    <section id="dashboard" className="py-24 bg-neutral-50">
      <Container>
        <motion.div
          className="text-center mb-16"
          variants={ANIMATION_VARIANTS.stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6"
            variants={ANIMATION_VARIANTS.fadeInUp}
          >
            Powerful Dashboard Analytics
          </motion.h2>
          <motion.p
            className="text-xl text-neutral-600 max-w-3xl mx-auto"
            variants={ANIMATION_VARIANTS.fadeInUp}
          >
            Get real-time insights into your recruitment performance with 
            comprehensive analytics and reporting.
          </motion.p>
        </motion.div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricsCard
            title="Total Revenue"
            value={PERFORMANCE_METRICS.totalRevenue}
            prefix="$"
            change={12.5}
            icon={DollarSign}
            color="bg-green-500"
          />
          <MetricsCard
            title="Total Placements"
            value={PERFORMANCE_METRICS.totalPlacements}
            change={8.2}
            icon={Users}
            color="bg-blue-500"
          />
          <MetricsCard
            title="Avg. Time to Fill"
            value={PERFORMANCE_METRICS.averageTime}
            suffix=" days"
            change={-15.3}
            icon={Clock}
            color="bg-purple-500"
          />
          <MetricsCard
            title="Success Rate"
            value={PERFORMANCE_METRICS.successRate}
            suffix="%"
            change={4.7}
            icon={Target}
            color="bg-orange-500"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Revenue Chart */}
          <RevenueChart data={REVENUE_DATA} />

          {/* Performance Overview */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-neutral-900 mb-6">
              Performance Overview
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-neutral-900">Success Rate</p>
                  <p className="text-sm text-neutral-600">Current quarter</p>
                </div>
                <ProgressCircle percentage={94} size={80}>
                  <span className="text-lg font-semibold text-neutral-900">94%</span>
                </ProgressCircle>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-neutral-900">Goal Achievement</p>
                  <p className="text-sm text-neutral-600">Monthly target</p>
                </div>
                <ProgressCircle percentage={87} size={80}>
                  <span className="text-lg font-semibold text-neutral-900">87%</span>
                </ProgressCircle>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-neutral-900">Client Satisfaction</p>
                  <p className="text-sm text-neutral-600">Average rating</p>
                </div>
                <ProgressCircle percentage={96} size={80}>
                  <span className="text-lg font-semibold text-neutral-900">96%</span>
                </ProgressCircle>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Brokers */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-primary-green" />
              <h3 className="text-xl font-semibold text-neutral-900">
                Top Performers
              </h3>
            </div>

            <div className="space-y-4">
              {TOP_BROKERS.map((broker, index) => (
                <motion.div
                  key={broker.name}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-neutral-50 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-primary-green text-white text-sm flex items-center justify-center font-medium">
                        {index + 1}
                      </span>
                      <Avatar className="w-10 h-10">
                        <div className="w-full h-full bg-gradient-to-br from-primary-green to-accent-emerald flex items-center justify-center text-white font-medium">
                          {broker.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </Avatar>
                    </div>
                    <div>
                      <p className="font-medium text-neutral-900">{broker.name}</p>
                      <p className="text-sm text-neutral-600">
                        {broker.placements} placements
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-neutral-900">
                      ${broker.revenue.toLocaleString()}
                    </p>
                    <Badge variant="secondary" className="text-xs">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      +12%
                    </Badge>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>

          {/* Recent Activity */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-neutral-900 mb-6">
              Recent Activity
            </h3>

            <div className="space-y-4">
              {RECENT_ACTIVITIES.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-neutral-50 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 rounded-full bg-primary-green mt-2 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-neutral-900 mb-1">
                      {activity.title}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-neutral-600">
                      <span>{activity.broker}</span>
                      <span>•</span>
                      <span>{activity.time}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}