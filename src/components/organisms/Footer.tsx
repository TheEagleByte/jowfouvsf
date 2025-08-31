"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Container } from "@/components/atoms/Container";
import { Logo } from "@/components/atoms/Logo";
import { NAVIGATION_ITEMS, SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "mailto:hello@inventure-recruitment.com", label: "Email" },
  ];

  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "AI Platform", href: "#ai-platform" },
        { name: "Dashboard", href: "#dashboard" },
        { name: "Pricing", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#" },
        { name: "Help Center", href: "#" },
        { name: "API Reference", href: "#" },
        { name: "Community", href: "#community" },
      ],
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Logo variant="white" className="mb-6" />
                <p className="text-neutral-400 mb-6 max-w-md">
                  {SITE_CONFIG.description}. Join the future of recruitment 
                  with our AI-powered platform.
                </p>
                
                {/* Social Links */}
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        className="p-2 rounded-lg bg-neutral-800 hover:bg-primary-green transition-colors duration-200"
                        aria-label={social.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        whileHover={{ y: -2 }}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (sectionIndex + 1) * 0.1, duration: 0.6 }}
              >
                <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-neutral-400 hover:text-white transition-colors duration-200"
                        onClick={(e) => {
                          if (link.href.startsWith("#")) {
                            e.preventDefault();
                            const element = document.querySelector(link.href);
                            element?.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-neutral-800 py-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-neutral-400 text-sm">
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
}