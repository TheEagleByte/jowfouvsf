"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Container } from "@/components/atoms/Container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ANIMATION_VARIANTS } from "@/lib/constants";

export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us an email anytime",
      value: "hello@inventure-recruitment.com",
      color: "bg-blue-500",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Mon-Fri from 8am to 6pm",
      value: "+1 (555) 000-0000",
      color: "bg-green-500",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Come say hello at our office",
      value: "San Francisco, CA",
      color: "bg-purple-500",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white">
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
            Ready to Transform Your Recruitment?
          </motion.h2>
          <motion.p
            className="text-xl text-neutral-600 max-w-3xl mx-auto"
            variants={ANIMATION_VARIANTS.fadeInUp}
          >
            Join thousands of recruitment professionals who are already using our platform 
            to scale their business and increase their success rates.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Methods */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.stagger}
          >
            <motion.div variants={ANIMATION_VARIANTS.fadeInUp}>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-6">
                Get in Touch
              </h3>
              <p className="text-neutral-600 mb-8">
                Have questions? We'd love to hear from you. Send us a message 
                and we'll respond as soon as possible.
              </p>
            </motion.div>

            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.div
                    key={method.title}
                    variants={ANIMATION_VARIANTS.fadeInLeft}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl ${method.color}`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-neutral-900 mb-1">
                            {method.title}
                          </h4>
                          <p className="text-sm text-neutral-600 mb-2">
                            {method.description}
                          </p>
                          <p className="font-medium text-neutral-900">
                            {method.value}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.fadeInRight}
          >
            <Card className="p-8">
              <h3 className="text-2xl font-semibold text-neutral-900 mb-6">
                Send us a Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    placeholder="Your Company"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your recruitment needs..."
                    className="mt-1 w-full rounded-md border border-neutral-200 px-3 py-2 text-sm placeholder:text-neutral-500 focus:border-primary-green focus:outline-none focus:ring-1 focus:ring-primary-green"
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-24 text-center bg-gradient-to-r from-primary-green to-accent-emerald rounded-2xl p-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={ANIMATION_VARIANTS.scale}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Start Your Free Trial Today
          </h3>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            No credit card required. Get started in minutes and see the 
            difference AI-powered recruitment can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg px-8">
              Start Free Trial
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 bg-transparent border-white text-white hover:bg-white hover:text-neutral-900"
            >
              Schedule Demo
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}