export const SITE_CONFIG = {
  name: "Inventure Recruitment",
  tagline: "Recruiting Without Limits",
  description: "Speed, scale, and sophistication for the sustainable energy sector",
  url: "https://inventure-recruitment.com",
} as const;

export const NAVIGATION_ITEMS = [
  { name: "Features", href: "#features" },
  { name: "AI Platform", href: "#ai-platform" },
  { name: "Community", href: "#community" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Contact", href: "#contact" },
] as const;

export const STATS = [
  { value: 10, suffix: "K+", label: "Active Recruiters" },
  { value: 500, suffix: "K+", label: "Placements Made" },
  { value: 98, suffix: "%", label: "Success Rate" },
  { value: 24, suffix: "/7", label: "Support" },
] as const;

export const FEATURES = [
  {
    title: "AI-Driven Matching",
    description: "Advanced algorithms match candidates to roles with unprecedented accuracy.",
    icon: "brain",
  },
  {
    title: "Revenue Sharing",
    description: "Transparent commission structure that rewards performance and builds partnerships.",
    icon: "dollarsign",
  },
  {
    title: "Broker Network",
    description: "Connect with a competitive community of recruitment professionals.",
    icon: "users",
  },
  {
    title: "Real-time Analytics",
    description: "Track performance, analyze trends, and optimize your recruitment strategy.",
    icon: "trendingup",
  },
] as const;

export const ANIMATION_VARIANTS = {
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  },
  stagger: {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
} as const;