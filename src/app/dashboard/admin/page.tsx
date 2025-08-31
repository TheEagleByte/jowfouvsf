"use client";

import { motion } from "framer-motion";
import { Users, Building2, DollarSign, TrendingUp, AlertTriangle, CheckCircle, Clock, Shield } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Header } from "@/components/organisms/Header";
import { Container } from "@/components/atoms/Container";
import { MetricsCard } from "@/components/charts/MetricsCard";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { 
  PLATFORM_OVERVIEW, 
  USER_GROWTH_DATA, 
  REVENUE_BREAKDOWN, 
  TOP_PERFORMING_RECRUITERS,
  SYSTEM_ALERTS,
  PENDING_APPROVALS
} from "@/lib/data/admin";
import { ANIMATION_VARIANTS } from "@/lib/constants";

export default function AdminDashboard() {
  const getAlertColor = (severity: string) => {
    switch (severity) {
      case "high": return "bg-red-100 text-red-800 border-red-200";
      case "medium": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low": return "bg-green-100 text-green-800 border-green-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-500";
      case "medium": return "bg-yellow-500";
      case "low": return "bg-green-500";
      default: return "bg-gray-500";
    }
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border border-neutral-200">
          <p className="font-medium text-neutral-900 mb-2">{label}</p>
          <div className="space-y-1">
            {payload.map((entry: any, index: number) => (
              <p key={index} className="text-sm" style={{ color: entry.color }}>
                {entry.name}: {entry.value.toLocaleString()}
              </p>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <main className="relative bg-neutral-50 min-h-screen">
      <Header />
      <div className="pt-20">
        <Container>
          <div className="py-8">
            {/* Welcome Section */}
            <motion.div
              className="mb-8"
              initial="hidden"
              animate="visible"
              variants={ANIMATION_VARIANTS.fadeInUp}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-neutral-900">Platform Administration</h1>
                  <p className="text-neutral-600 mt-1">Monitor and manage the Inventure Recruitment platform.</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-100 text-green-800">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    System Healthy
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-800">
                    Uptime: {PLATFORM_OVERVIEW.platformUptime}%
                  </Badge>
                </div>
              </div>
            </motion.div>

            {/* Platform Overview Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <MetricsCard
                title="Total Users"
                value={PLATFORM_OVERVIEW.totalUsers}
                change={8.2}
                icon={Users}
                color="bg-blue-500"
              />
              <MetricsCard
                title="Monthly Revenue"
                value={PLATFORM_OVERVIEW.monthlyRevenue}
                prefix="$"
                change={12.5}
                icon={DollarSign}
                color="bg-green-500"
              />
              <MetricsCard
                title="Total Placements"
                value={PLATFORM_OVERVIEW.totalPlacements}
                change={15.3}
                icon={TrendingUp}
                color="bg-purple-500"
              />
              <MetricsCard
                title="Avg. Time to Hire"
                value={PLATFORM_OVERVIEW.averageTimeToHire}
                suffix=" days"
                change={-8.7}
                icon={Clock}
                color="bg-orange-500"
              />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* User Growth Chart */}
              <Card className="p-6 bg-white">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">User Growth</h3>
                  <p className="text-neutral-600">Monthly active users by type</p>
                </div>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={USER_GROWTH_DATA}>
                      <defs>
                        <linearGradient id="recruitersGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#22C55E" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#22C55E" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="candidatesGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E4E4E7" />
                      <XAxis dataKey="month" stroke="#71717A" fontSize={12} />
                      <YAxis stroke="#71717A" fontSize={12} />
                      <Tooltip content={<CustomTooltip />} />
                      <Area
                        type="monotone"
                        dataKey="candidates"
                        stackId="1"
                        stroke="#3B82F6"
                        fill="url(#candidatesGradient)"
                        name="Candidates"
                      />
                      <Area
                        type="monotone"
                        dataKey="recruiters"
                        stackId="1"
                        stroke="#22C55E"
                        fill="url(#recruitersGradient)"
                        name="Recruiters"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              {/* Revenue Breakdown */}
              <Card className="p-6 bg-white">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">Revenue Breakdown</h3>
                  <p className="text-neutral-600">Monthly revenue by source</p>
                </div>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={REVENUE_BREAKDOWN}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E4E4E7" />
                      <XAxis dataKey="month" stroke="#71717A" fontSize={12} />
                      <YAxis stroke="#71717A" fontSize={12} tickFormatter={(value) => `$${value / 1000}k`} />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar dataKey="subscriptions" stackId="revenue" fill="#22C55E" name="Subscriptions" />
                      <Bar dataKey="commissions" stackId="revenue" fill="#3B82F6" name="Commissions" />
                      <Bar dataKey="premium" stackId="revenue" fill="#F59E0B" name="Premium Features" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {/* Top Performing Recruiters */}
              <Card className="p-6 bg-white">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-neutral-900">Top Recruiters</h3>
                  <Badge variant="secondary">This Month</Badge>
                </div>

                <div className="space-y-4">
                  {TOP_PERFORMING_RECRUITERS.slice(0, 5).map((recruiter, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-neutral-50 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-primary-green text-white text-sm flex items-center justify-center font-medium">
                            {index + 1}
                          </span>
                          <Avatar className="w-8 h-8">
                            <div className="w-full h-full bg-gradient-to-br from-primary-green to-accent-emerald flex items-center justify-center text-white font-medium text-xs">
                              {recruiter.name.split(' ').map(n => n[0]).join('')}
                            </div>
                          </Avatar>
                        </div>
                        <div>
                          <p className="font-medium text-neutral-900 text-sm">{recruiter.name}</p>
                          <p className="text-xs text-neutral-600">{recruiter.placements} placements</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-neutral-900">${recruiter.revenue.toLocaleString()}</p>
                        <p className="text-xs text-neutral-600">{recruiter.efficiency}% efficiency</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <Button variant="outline" className="w-full mt-4" size="sm">
                  View All Recruiters
                </Button>
              </Card>

              {/* System Alerts */}
              <Card className="p-6 bg-white">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-neutral-900">System Alerts</h3>
                  <Badge variant="secondary">{SYSTEM_ALERTS.length} Active</Badge>
                </div>

                <div className="space-y-4">
                  {SYSTEM_ALERTS.map((alert, index) => (
                    <motion.div
                      key={alert.id}
                      className="border border-neutral-200 rounded-lg p-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-orange-500" />
                          <h4 className="font-medium text-neutral-900 text-sm">{alert.title}</h4>
                        </div>
                        <Badge className={getAlertColor(alert.severity)}>
                          {alert.severity}
                        </Badge>
                      </div>
                      <p className="text-sm text-neutral-600 mb-2">{alert.message}</p>
                      <p className="text-xs text-neutral-500">{alert.time}</p>
                    </motion.div>
                  ))}
                </div>

                <Button variant="outline" className="w-full mt-4" size="sm">
                  <Shield className="w-4 h-4 mr-2" />
                  System Health
                </Button>
              </Card>

              {/* Pending Approvals */}
              <Card className="p-6 bg-white">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-neutral-900">Pending Approvals</h3>
                  <Badge className="bg-orange-100 text-orange-800">{PENDING_APPROVALS.length} Pending</Badge>
                </div>

                <div className="space-y-4">
                  {PENDING_APPROVALS.map((approval, index) => (
                    <motion.div
                      key={approval.id}
                      className="border border-neutral-200 rounded-lg p-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${getPriorityColor(approval.priority)}`} />
                          <div>
                            <h4 className="font-medium text-neutral-900 text-sm">{approval.type}</h4>
                            <p className="text-sm text-neutral-600">{approval.item}</p>
                          </div>
                        </div>
                        <Badge className="text-xs" variant="secondary">
                          {approval.priority}
                        </Badge>
                      </div>
                      <p className="text-xs text-neutral-500 mb-3">
                        Requested by {approval.requestedBy} on {approval.date}
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1 text-xs">Approve</Button>
                        <Button variant="outline" size="sm" className="flex-1 text-xs">Review</Button>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <Button variant="outline" className="w-full mt-4" size="sm">
                  View All Requests
                </Button>
              </Card>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="p-4 bg-white text-center">
                <div className="text-2xl font-bold text-primary-green">{PLATFORM_OVERVIEW.activeRecruiters}</div>
                <div className="text-sm text-neutral-600">Active Recruiters</div>
              </Card>
              <Card className="p-4 bg-white text-center">
                <div className="text-2xl font-bold text-blue-600">{PLATFORM_OVERVIEW.activeCandidates.toLocaleString()}</div>
                <div className="text-sm text-neutral-600">Active Candidates</div>
              </Card>
              <Card className="p-4 bg-white text-center">
                <div className="text-2xl font-bold text-purple-600">{PLATFORM_OVERVIEW.totalCompanies}</div>
                <div className="text-sm text-neutral-600">Partner Companies</div>
              </Card>
              <Card className="p-4 bg-white text-center">
                <div className="text-2xl font-bold text-orange-600">{PLATFORM_OVERVIEW.averageTimeToHire}</div>
                <div className="text-sm text-neutral-600">Days to Hire</div>
              </Card>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
}