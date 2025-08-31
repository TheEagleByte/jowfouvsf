"use client";

import { motion } from "framer-motion";
import { Plus, Users, Briefcase, TrendingUp, Clock, DollarSign, Eye, MessageSquare } from "lucide-react";
import { Header } from "@/components/organisms/Header";
import { Container } from "@/components/atoms/Container";
import { MetricsCard } from "@/components/charts/MetricsCard";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { RECRUITER_PROFILE, ACTIVE_JOBS, CANDIDATE_PIPELINE, RECENT_PLACEMENTS } from "@/lib/data/recruiter";
import { ANIMATION_VARIANTS } from "@/lib/constants";

export default function RecruiterDashboard() {
  const getStageColor = (stage: string) => {
    switch (stage) {
      case "Interview Scheduled": return "bg-blue-500";
      case "Reference Check": return "bg-orange-500";
      case "Technical Review": return "bg-purple-500";
      default: return "bg-gray-500";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-500";
      case "paused": return "bg-yellow-500";
      case "closed": return "bg-red-500";
      default: return "bg-gray-500";
    }
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
                  <h1 className="text-3xl font-bold text-neutral-900">Welcome back, {RECRUITER_PROFILE.name}</h1>
                  <p className="text-neutral-600 mt-1">Here's what's happening with your recruitment pipeline today.</p>
                </div>
                <Button className="flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Post New Job
                </Button>
              </div>
            </motion.div>

            {/* Metrics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <MetricsCard
                title="Total Earnings"
                value={RECRUITER_PROFILE.totalEarnings}
                prefix="$"
                change={12.5}
                icon={DollarSign}
                color="bg-green-500"
              />
              <MetricsCard
                title="Placements This Month"
                value={RECRUITER_PROFILE.placementsThisMonth}
                change={25}
                icon={Users}
                color="bg-blue-500"
              />
              <MetricsCard
                title="Success Rate"
                value={RECRUITER_PROFILE.successRate}
                suffix="%"
                change={4.7}
                icon={TrendingUp}
                color="bg-purple-500"
              />
              <MetricsCard
                title="Active Jobs"
                value={ACTIVE_JOBS.length}
                change={8.3}
                icon={Briefcase}
                color="bg-orange-500"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Active Jobs */}
              <Card className="p-6 bg-white">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-neutral-900">Active Job Postings</h3>
                  <Badge variant="secondary">{ACTIVE_JOBS.length} Active</Badge>
                </div>

                <div className="space-y-4">
                  {ACTIVE_JOBS.map((job, index) => (
                    <motion.div
                      key={job.id}
                      className="border border-neutral-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-neutral-900">{job.title}</h4>
                          <p className="text-sm text-neutral-600">{job.company} • {job.location}</p>
                          <p className="text-sm text-neutral-500">{job.salary}</p>
                        </div>
                        <div className={`w-2 h-2 rounded-full ${getStatusColor(job.status)}`} />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-neutral-600">
                          <span className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {job.applications}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {job.matches} matches
                          </span>
                        </div>
                        <div className="text-sm font-medium text-primary-green">
                          {job.commission} commission
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <Button variant="outline" className="w-full mt-4">
                  View All Jobs
                </Button>
              </Card>

              {/* Candidate Pipeline */}
              <Card className="p-6 bg-white">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-neutral-900">Candidate Pipeline</h3>
                  <Badge variant="secondary">{CANDIDATE_PIPELINE.length} In Progress</Badge>
                </div>

                <div className="space-y-4">
                  {CANDIDATE_PIPELINE.map((candidate, index) => (
                    <motion.div
                      key={candidate.id}
                      className="border border-neutral-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-10 h-10">
                            <div className="w-full h-full bg-gradient-to-br from-primary-green to-accent-emerald flex items-center justify-center text-white font-medium text-sm">
                              {candidate.name.split(' ').map(n => n[0]).join('')}
                            </div>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold text-neutral-900">{candidate.name}</h4>
                            <p className="text-sm text-neutral-600">{candidate.position}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-primary-green">{candidate.matchScore}% match</div>
                          <div className="text-xs text-neutral-500">{candidate.experience}</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <Badge className={`${getStageColor(candidate.stage)} text-white border-none text-xs`}>
                          {candidate.stage}
                        </Badge>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            <MessageSquare className="w-4 h-4" />
                          </Button>
                          <Button size="sm">View Profile</Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <Button variant="outline" className="w-full mt-4">
                  View All Candidates
                </Button>
              </Card>
            </div>

            {/* Recent Placements */}
            <Card className="p-6 bg-white">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-neutral-900">Recent Placements</h3>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  {RECENT_PLACEMENTS.length} This Month
                </Badge>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b border-neutral-200">
                    <tr className="text-left">
                      <th className="pb-3 font-medium text-neutral-700">Candidate</th>
                      <th className="pb-3 font-medium text-neutral-700">Position</th>
                      <th className="pb-3 font-medium text-neutral-700">Company</th>
                      <th className="pb-3 font-medium text-neutral-700">Date Placed</th>
                      <th className="pb-3 font-medium text-neutral-700">Commission</th>
                      <th className="pb-3 font-medium text-neutral-700">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {RECENT_PLACEMENTS.map((placement, index) => (
                      <motion.tr
                        key={placement.id}
                        className="border-b border-neutral-100"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <td className="py-4 font-medium text-neutral-900">{placement.candidateName}</td>
                        <td className="py-4 text-neutral-600">{placement.position}</td>
                        <td className="py-4 text-neutral-600">{placement.company}</td>
                        <td className="py-4 text-neutral-600">{new Date(placement.placedDate).toLocaleDateString()}</td>
                        <td className="py-4 font-medium text-primary-green">{placement.commission}</td>
                        <td className="py-4">
                          <Badge className="bg-green-100 text-green-800 border-green-200">
                            {placement.status}
                          </Badge>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </Container>
      </div>
    </main>
  );
}