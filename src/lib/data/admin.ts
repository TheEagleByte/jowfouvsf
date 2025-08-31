export const PLATFORM_OVERVIEW = {
  totalUsers: 12750,
  activeRecruiters: 342,
  activeCandidates: 8940,
  totalCompanies: 156,
  monthlyRevenue: 248000,
  totalPlacements: 1247,
  averageTimeToHire: 18,
  platformUptime: 99.9,
};

export const USER_GROWTH_DATA = [
  { month: "Jan", recruiters: 280, candidates: 7200, companies: 142 },
  { month: "Feb", recruiters: 295, candidates: 7650, companies: 145 },
  { month: "Mar", recruiters: 310, candidates: 8100, companies: 148 },
  { month: "Apr", recruiters: 325, candidates: 8400, companies: 151 },
  { month: "May", recruiters: 330, candidates: 8700, companies: 154 },
  { month: "Jun", recruiters: 342, candidates: 8940, companies: 156 },
];

export const REVENUE_BREAKDOWN = [
  { month: "Jan", subscriptions: 45000, commissions: 68000, premium: 12000 },
  { month: "Feb", subscriptions: 48000, commissions: 72000, premium: 15000 },
  { month: "Mar", subscriptions: 52000, commissions: 78000, premium: 18000 },
  { month: "Apr", subscriptions: 55000, commissions: 85000, premium: 22000 },
  { month: "May", subscriptions: 58000, commissions: 92000, premium: 25000 },
  { month: "Jun", subscriptions: 60000, commissions: 98000, premium: 28000 },
];

export const TOP_PERFORMING_RECRUITERS = [
  { name: "Sarah Chen", placements: 23, revenue: 89000, rating: 4.9, efficiency: 94 },
  { name: "Mike Rodriguez", placements: 21, revenue: 82000, rating: 4.8, efficiency: 91 },
  { name: "Emily Watson", placements: 19, revenue: 76000, rating: 4.7, efficiency: 89 },
  { name: "David Kim", placements: 18, revenue: 71000, rating: 4.8, efficiency: 88 },
  { name: "Jennifer Park", placements: 17, revenue: 68000, rating: 4.6, efficiency: 85 },
];

export const SYSTEM_ALERTS = [
  {
    id: 1,
    type: "warning",
    title: "High Server Load Detected",
    message: "API response times are 15% above normal during peak hours",
    time: "2 hours ago",
    severity: "medium"
  },
  {
    id: 2,
    type: "info", 
    title: "New Feature Deployment",
    message: "AI matching algorithm v2.3 has been successfully deployed",
    time: "6 hours ago",
    severity: "low"
  },
  {
    id: 3,
    type: "success",
    title: "Monthly Targets Exceeded",
    message: "Platform revenue exceeded monthly targets by 12%",
    time: "1 day ago", 
    severity: "low"
  },
];

export const PENDING_APPROVALS = [
  {
    id: 1,
    type: "Company Registration",
    item: "GreenTech Solutions LLC",
    requestedBy: "john.smith@greentech.com",
    date: "2024-08-30",
    priority: "high"
  },
  {
    id: 2,
    type: "Recruiter Verification",
    item: "Maria Santos - Senior Recruiter",
    requestedBy: "m.santos@talentfinder.com", 
    date: "2024-08-29",
    priority: "medium"
  },
  {
    id: 3,
    type: "Feature Request",
    item: "Advanced Analytics Dashboard",
    requestedBy: "Multiple users (15 requests)",
    date: "2024-08-28",
    priority: "low"
  },
];