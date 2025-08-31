"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, DollarSign, Users, TrendingUp, Zap, Shield } from "lucide-react";
import { Container } from "@/components/atoms/Container";
import { Card } from "@/components/ui/card";
import { ANIMATION_VARIANTS } from "@/lib/constants";

const icons = {
  brain: Brain,
  dollarsign: DollarSign,
  users: Users,
  trendingup: TrendingUp,
  zap: Zap,
  shield: Shield,
};

const features = [
  {
    title: "AI-Driven Matching",
    description: "Advanced algorithms match candidates to roles with unprecedented accuracy, learning from every interaction to improve results.",
    icon: "brain" as keyof typeof icons,
    color: "bg-blue-500",
  },
  {
    title: "Revenue Sharing",
    description: "Transparent commission structure that rewards performance and builds partnerships with competitive rates and instant payouts.",
    icon: "dollarsign" as keyof typeof icons,
    color: "bg-green-500",
  },
  {
    title: "Broker Network",
    description: "Connect with a competitive community of recruitment professionals, share insights, and collaborate on placements.",
    icon: "users" as keyof typeof icons,
    color: "bg-purple-500",
  },
  {
    title: "Real-time Analytics",
    description: "Track performance, analyze trends, and optimize your recruitment strategy with comprehensive dashboard insights.",
    icon: "trendingup" as keyof typeof icons,
    color: "bg-orange-500",
  },
  {
    title: "Instant Matching",
    description: "Get qualified candidates matched to your job postings in seconds, not days, with our lightning-fast AI engine.",
    icon: "zap" as keyof typeof icons,
    color: "bg-yellow-500",
  },
  {
    title: "Secure Platform",
    description: "Enterprise-grade security with encrypted data transmission and secure payment processing for peace of mind.",
    icon: "shield" as keyof typeof icons,
    color: "bg-teal-500",
  },
];

export function Features() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24 bg-white" ref={ref}>
      <Container>
        <motion.div
          className="text-center mb-16"
          variants={ANIMATION_VARIANTS.stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6"
            variants={ANIMATION_VARIANTS.fadeInUp}
          >
            Powerful Features for Modern Recruitment
          </motion.h2>
          <motion.p
            className="text-xl text-neutral-600 max-w-3xl mx-auto"
            variants={ANIMATION_VARIANTS.fadeInUp}
          >
            Everything you need to revolutionize your recruitment process, 
            from AI-powered matching to comprehensive analytics.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = icons[feature.icon];
            
            return (
              <motion.div
                key={feature.title}
                variants={ANIMATION_VARIANTS.scale}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 group cursor-pointer border-neutral-200 hover:border-primary-green/50 bg-white text-neutral-900">
                  <motion.div
                    className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-semibold text-neutral-900 mb-4 group-hover:text-primary-green transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-neutral-600 leading-relaxed">
                    {feature.description}
                  </p>

                  <motion.div
                    className="mt-6 w-0 h-0.5 bg-primary-green group-hover:w-full transition-all duration-500"
                  />
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}