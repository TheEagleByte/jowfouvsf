export const RECRUITER_PROFILE = {
  name: "Sarah Chen",
  email: "sarah@inventure.com",
  role: "Senior Recruiter",
  avatar: "/avatars/sarah.jpg",
  commissionRate: 15,
  totalEarnings: 89000,
  placementsThisMonth: 8,
  successRate: 94.2,
};

export const ACTIVE_JOBS = [
  {
    id: 1,
    title: "Senior Solar Engineer",
    company: "SunPower Corp",
    location: "San Francisco, CA",
    salary: "$120,000 - $150,000",
    type: "Full-time",
    posted: "2 days ago",
    applications: 24,
    matches: 8,
    status: "active",
    commission: "$18,000"
  },
  {
    id: 2,
    title: "Wind Farm Project Manager",
    company: "NextEra Energy",
    location: "Austin, TX",
    salary: "$95,000 - $125,000",
    type: "Full-time",
    posted: "1 week ago",
    applications: 18,
    matches: 12,
    status: "active",
    commission: "$15,000"
  },
  {
    id: 3,
    title: "Battery Storage Engineer",
    company: "Tesla Energy",
    location: "Remote",
    salary: "$110,000 - $140,000",
    type: "Full-time",
    posted: "3 days ago",
    applications: 31,
    matches: 15,
    status: "active",
    commission: "$16,500"
  },
];

export const CANDIDATE_PIPELINE = [
  {
    id: 1,
    name: "Michael Rodriguez",
    email: "m.rodriguez@email.com",
    position: "Senior Solar Engineer",
    stage: "Interview Scheduled",
    matchScore: 96,
    experience: "8 years",
    skills: ["Solar PV", "Energy Storage", "Project Management"],
    lastActivity: "2 hours ago",
  },
  {
    id: 2,
    name: "Emily Watson",
    email: "e.watson@email.com",
    position: "Wind Farm Project Manager", 
    stage: "Reference Check",
    matchScore: 92,
    experience: "6 years",
    skills: ["Wind Energy", "Project Management", "Team Leadership"],
    lastActivity: "1 day ago",
  },
  {
    id: 3,
    name: "David Kim",
    email: "d.kim@email.com",
    position: "Battery Storage Engineer",
    stage: "Technical Review",
    matchScore: 88,
    experience: "5 years",
    skills: ["Battery Systems", "Energy Storage", "Python"],
    lastActivity: "4 hours ago",
  },
];

export const RECENT_PLACEMENTS = [
  {
    id: 1,
    candidateName: "Jennifer Liu",
    position: "Solar Installation Manager",
    company: "Sunrun",
    placedDate: "2024-08-28",
    commission: "$12,500",
    status: "completed"
  },
  {
    id: 2,
    candidateName: "Robert Park",
    position: "Energy Analyst",
    company: "Green Mountain Energy",
    placedDate: "2024-08-25",
    commission: "$9,800",
    status: "completed"
  },
];