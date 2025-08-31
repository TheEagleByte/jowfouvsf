"use client";

import { motion } from "framer-motion";
import { Users, Search, Shield, ArrowRight } from "lucide-react";
import { Header } from "@/components/organisms/Header";
import { Container } from "@/components/atoms/Container";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ANIMATION_VARIANTS } from "@/lib/constants";

export default function DashboardPage() {
  const roles = [
    {
      title: "Recruiter Dashboard",
      description: "Manage job postings, candidate pipeline, and track your recruitment performance with detailed analytics.",
      icon: Users,
      color: "bg-blue-500",
      href: "/dashboard/recruiter",
      features: ["Job Management", "Candidate Pipeline", "Commission Tracking", "Performance Analytics"]
    },
    {
      title: "Candidate Dashboard", 
      description: "Discover job matches, track applications, and manage your professional profile in the energy sector.",
      icon: Search,
      color: "bg-green-500", 
      href: "/dashboard/candidate",
      features: ["Job Matches", "Application Tracking", "Profile Management", "Skill Development"]
    },
    {
      title: "Admin Dashboard",
      description: "Monitor platform health, manage users, and oversee system-wide analytics and operations.",
      icon: Shield,
      color: "bg-purple-500",
      href: "/dashboard/admin", 
      features: ["User Management", "System Analytics", "Revenue Tracking", "Platform Health"]
    }
  ];

  return (
    <main className="relative bg-white min-h-screen">
      <Header />
      <div className="pt-20">
        <Container>
          <div className="py-16">
            {/* Header */}
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              animate="visible"
              variants={ANIMATION_VARIANTS.stagger}
            >
              <motion.h1
                className="text-4xl font-bold text-neutral-900 mb-4"
                variants={ANIMATION_VARIANTS.fadeInUp}
              >
                Choose Your Dashboard
              </motion.h1>
              <motion.p
                className="text-xl text-neutral-600 max-w-2xl mx-auto"
                variants={ANIMATION_VARIANTS.fadeInUp}
              >
                Select your role to access a personalized dashboard experience tailored to your needs.
              </motion.p>
            </motion.div>

            {/* Role Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {roles.map((role, index) => {
                const Icon = role.icon;
                return (
                  <motion.div
                    key={role.title}
                    variants={ANIMATION_VARIANTS.scale}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.2 }}
                  >
                    <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 group cursor-pointer border-neutral-200 hover:border-primary-green/50 bg-white">
                      <motion.div
                        className={`w-16 h-16 ${role.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 5 }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>

                      <h3 className="text-2xl font-semibold text-neutral-900 mb-4 group-hover:text-primary-green transition-colors">
                        {role.title}
                      </h3>
                      
                      <p className="text-neutral-600 leading-relaxed mb-6">
                        {role.description}
                      </p>

                      <div className="mb-8">
                        <h4 className="font-medium text-neutral-900 mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {role.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-neutral-600">
                              <div className="w-1.5 h-1.5 bg-primary-green rounded-full mr-3" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button 
                        className="w-full group-hover:bg-primary-green group-hover:text-white transition-colors"
                        variant="outline"
                        onClick={() => window.location.href = role.href}
                      >
                        Access Dashboard
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Demo Notice */}
            <motion.div
              className="text-center mt-16 p-6 bg-neutral-50 rounded-xl border border-neutral-200"
              initial="hidden"
              animate="visible"
              variants={ANIMATION_VARIANTS.fadeInUp}
              transition={{ delay: 0.8 }}
            >
              <p className="text-neutral-600">
                <strong>Demo Note:</strong> These are demonstration dashboards with sample data. 
                Each role provides a different perspective of the Inventure Recruitment platform experience.
              </p>
            </motion.div>
          </div>
        </Container>
      </div>
    </main>
  );
}