"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/atoms/Container";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/atoms/AnimatedCounter";
import { ParticleSystem } from "@/components/atoms/ParticleSystem";
import { SITE_CONFIG, STATS, ANIMATION_VARIANTS } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white py-20">
      {/* Background Particles */}
      <div className="absolute inset-0 opacity-40">
        <ParticleSystem />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <Container className="relative z-10">
        <div className="text-center">
          {/* Main Headline */}
          <motion.div
            className="space-y-6 mb-12"
            variants={ANIMATION_VARIANTS.stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight"
              variants={ANIMATION_VARIANTS.fadeInUp}
            >
              {SITE_CONFIG.tagline}
            </motion.h1>

            <motion.h2
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary-green"
              variants={ANIMATION_VARIANTS.fadeInUp}
            >
              Speed and Scale
            </motion.h2>

            <motion.p
              className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed"
              variants={ANIMATION_VARIANTS.fadeInUp}
            >
              We're building a new model for recruitment. One that combines revenue sharing, 
              a marketing engine, a competitive broker community, and an AI-driven learning platform. 
              This is recruitment rewritten for the modern era.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            variants={ANIMATION_VARIANTS.fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            <Button size="lg" className="text-lg px-8 py-4 h-auto">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto">
              Watch Demo
            </Button>
          </motion.div>

          {/* Statistics */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto"
            variants={ANIMATION_VARIANTS.stagger}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
          >
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                variants={ANIMATION_VARIANTS.scale}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-2">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={2.5}
                  />
                </div>
                <div className="text-sm sm:text-base text-neutral-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-neutral-400 rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-neutral-400 rounded-full mt-2"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}