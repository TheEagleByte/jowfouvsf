"use client";

import { motion } from "framer-motion";
import { Search, Heart, BookOpen, User, MapPin, DollarSign, Clock, Star, Eye } from "lucide-react";
import { Header } from "@/components/organisms/Header";
import { Container } from "@/components/atoms/Container";
import { MetricsCard } from "@/components/charts/MetricsCard";
import { ProgressCircle } from "@/components/atoms/ProgressCircle";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { CANDIDATE_PROFILE, JOB_MATCHES, APPLICATION_HISTORY, RECOMMENDED_SKILLS } from "@/lib/data/candidate";
import { ANIMATION_VARIANTS } from "@/lib/constants";

export default function CandidateDashboard() {
  const getMatchColor = (score: number) => {
    if (score >= 90) return "text-green-600 bg-green-50";
    if (score >= 80) return "text-blue-600 bg-blue-50";
    if (score >= 70) return "text-orange-600 bg-orange-50";
    return "text-red-600 bg-red-50";
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new": return "bg-blue-500 text-white";
      case "applied": return "bg-orange-500 text-white";
      case "interviewing": return "bg-purple-500 text-white";
      case "rejected": return "bg-red-500 text-white";
      default: return "bg-gray-500 text-white";
    }
  };

  const getApplicationStatusColor = (status: string) => {
    switch (status) {
      case "Interview Scheduled": return "bg-green-100 text-green-800 border-green-200";
      case "Under Review": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Rejected": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
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
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-6">
                  <Avatar className="w-20 h-20">
                    <div className="w-full h-full bg-gradient-to-br from-primary-green to-accent-emerald flex items-center justify-center text-white font-bold text-2xl">
                      {CANDIDATE_PROFILE.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </Avatar>
                  <div>
                    <h1 className="text-3xl font-bold text-neutral-900">{CANDIDATE_PROFILE.name}</h1>
                    <p className="text-lg text-neutral-600">{CANDIDATE_PROFILE.title}</p>
                    <p className="text-sm text-neutral-500 flex items-center gap-1 mt-1">
                      <MapPin className="w-4 h-4" />
                      {CANDIDATE_PROFILE.location} • {CANDIDATE_PROFILE.experience} experience
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-neutral-600 mb-2">Profile Strength</div>
                  <ProgressCircle percentage={CANDIDATE_PROFILE.profileStrength} size={60}>
                    <span className="text-sm font-semibold text-neutral-900">{CANDIDATE_PROFILE.profileStrength}%</span>
                  </ProgressCircle>
                </div>
              </div>
            </motion.div>

            {/* Metrics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <MetricsCard
                title="Job Matches"
                value={JOB_MATCHES.length}
                change={15.2}
                icon={Search}
                color="bg-blue-500"
              />
              <MetricsCard
                title="Applications Sent"
                value={APPLICATION_HISTORY.length}
                change={8.3}
                icon={Eye}
                color="bg-green-500"
              />
              <MetricsCard
                title="Interview Rate"
                value={66.7}
                suffix="%"
                change={12.1}
                icon={Star}
                color="bg-purple-500"
              />
              <MetricsCard
                title="Response Time"
                value={24}
                suffix=" hrs"
                change={-18.5}
                icon={Clock}
                color="bg-orange-500"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {/* Job Matches */}
              <div className="lg:col-span-2">
                <Card className="p-6 bg-white">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-neutral-900">Recommended Job Matches</h3>
                    <Badge variant="secondary">{JOB_MATCHES.length} New</Badge>
                  </div>

                  <div className="space-y-6">
                    {JOB_MATCHES.map((job, index) => (
                      <motion.div
                        key={job.id}
                        className="border border-neutral-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h4 className="font-semibold text-neutral-900 text-lg">{job.title}</h4>
                              <Badge className={`${getMatchColor(job.matchScore)} border-none font-medium`}>
                                {job.matchScore}% match
                              </Badge>
                            </div>
                            <p className="text-neutral-600 mb-2">{job.company} • {job.location}</p>
                            <p className="text-neutral-900 font-medium">{job.salary}</p>
                            <p className="text-sm text-neutral-500">Posted {job.posted} by {job.recruiter}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">
                              <Heart className="w-4 h-4" />
                            </Button>
                            <Badge className={getStatusColor(job.status)}>
                              {job.status}
                            </Badge>
                          </div>
                        </div>

                        <div className="mb-4">
                          <p className="text-neutral-600 text-sm leading-relaxed">{job.description}</p>
                        </div>

                        <div className="mb-4">
                          <p className="text-sm font-medium text-neutral-700 mb-2">Key Requirements:</p>
                          <div className="flex flex-wrap gap-2">
                            {job.requirements.map((req, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {req}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="text-sm text-neutral-500">
                            Match score based on your skills and experience
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">Learn More</Button>
                            <Button size="sm">Apply Now</Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Skills & Profile */}
              <div className="space-y-6">
                {/* Skills */}
                <Card className="p-6 bg-white">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4">Your Skills</h3>
                  <div className="space-y-3">
                    {CANDIDATE_PROFILE.skills.map((skill, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm text-neutral-700">{skill}</span>
                        <Badge variant="secondary" className="text-xs">Verified</Badge>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4" size="sm">
                    <User className="w-4 h-4 mr-2" />
                    Update Profile
                  </Button>
                </Card>

                {/* Recommended Skills */}
                <Card className="p-6 bg-white">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4">Skill Recommendations</h3>
                  <div className="space-y-3">
                    {RECOMMENDED_SKILLS.map((item, index) => (
                      <div key={index} className="border border-neutral-200 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-neutral-900">{item.skill}</span>
                          <Badge 
                            className={item.demand === "High" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"}
                          >
                            {item.demand}
                          </Badge>
                        </div>
                        <p className="text-xs text-neutral-500">{item.courses} courses available</p>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4" size="sm">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Browse Courses
                  </Button>
                </Card>
              </div>
            </div>

            {/* Application History */}
            <Card className="p-6 bg-white">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-neutral-900">Application History</h3>
                <Badge variant="secondary">{APPLICATION_HISTORY.length} Total Applications</Badge>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b border-neutral-200">
                    <tr className="text-left">
                      <th className="pb-3 font-medium text-neutral-700">Position</th>
                      <th className="pb-3 font-medium text-neutral-700">Company</th>
                      <th className="pb-3 font-medium text-neutral-700">Applied Date</th>
                      <th className="pb-3 font-medium text-neutral-700">Status</th>
                      <th className="pb-3 font-medium text-neutral-700">Next Step</th>
                      <th className="pb-3 font-medium text-neutral-700">Recruiter</th>
                    </tr>
                  </thead>
                  <tbody>
                    {APPLICATION_HISTORY.map((application, index) => (
                      <motion.tr
                        key={application.id}
                        className="border-b border-neutral-100"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <td className="py-4 font-medium text-neutral-900">{application.jobTitle}</td>
                        <td className="py-4 text-neutral-600">{application.company}</td>
                        <td className="py-4 text-neutral-600">{new Date(application.appliedDate).toLocaleDateString()}</td>
                        <td className="py-4">
                          <Badge className={getApplicationStatusColor(application.status)}>
                            {application.status}
                          </Badge>
                        </td>
                        <td className="py-4 text-sm text-neutral-600 max-w-48 truncate">{application.nextStep}</td>
                        <td className="py-4 text-neutral-600">{application.recruiter}</td>
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