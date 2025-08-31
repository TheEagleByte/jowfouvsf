export const CANDIDATE_PROFILE = {
  name: "Alex Thompson",
  email: "alex.thompson@email.com", 
  title: "Senior Renewable Energy Engineer",
  location: "Denver, CO",
  experience: "7 years",
  avatar: "/avatars/alex.jpg",
  skills: ["Solar PV Design", "Energy Storage", "Project Management", "MATLAB", "AutoCAD"],
  desiredSalary: "$115,000 - $135,000",
  availability: "Immediate",
  profileStrength: 95,
};

export const JOB_MATCHES = [
  {
    id: 1,
    title: "Senior Solar Engineer", 
    company: "SunPower Corp",
    location: "San Francisco, CA",
    salary: "$120,000 - $150,000",
    matchScore: 96,
    type: "Full-time",
    posted: "2 days ago",
    recruiter: "Sarah Chen",
    description: "Lead solar PV system design and implementation for commercial projects.",
    requirements: ["5+ years solar experience", "PE license preferred", "Project management"],
    status: "new"
  },
  {
    id: 2,
    title: "Energy Storage Engineer",
    company: "Tesla Energy", 
    location: "Remote",
    salary: "$110,000 - $140,000",
    matchScore: 91,
    type: "Full-time",
    posted: "3 days ago",
    recruiter: "Mike Rodriguez",
    description: "Design and optimize battery energy storage systems.",
    requirements: ["Battery technology experience", "Python/MATLAB", "System integration"],
    status: "applied"
  },
  {
    id: 3,
    title: "Renewable Energy Project Manager",
    company: "NextEra Energy",
    location: "Austin, TX", 
    salary: "$100,000 - $125,000",
    matchScore: 87,
    type: "Full-time",
    posted: "1 week ago",
    recruiter: "Emily Watson",
    description: "Manage large-scale renewable energy development projects.",
    requirements: ["PMP certification", "Renewable energy experience", "Stakeholder management"],
    status: "interviewing"
  },
];

export const APPLICATION_HISTORY = [
  {
    id: 1,
    jobTitle: "Solar Design Engineer",
    company: "Sunrun", 
    appliedDate: "2024-08-20",
    status: "Interview Scheduled",
    stage: "Technical Interview",
    nextStep: "On-site interview on Sept 5th",
    recruiter: "Jennifer Park",
  },
  {
    id: 2,
    jobTitle: "Energy Systems Analyst", 
    company: "Green Mountain Energy",
    appliedDate: "2024-08-15",
    status: "Under Review",
    stage: "Application Review",
    nextStep: "Waiting for recruiter feedback",
    recruiter: "David Liu",
  },
  {
    id: 3,
    jobTitle: "Wind Farm Engineer",
    company: "Vestas",
    appliedDate: "2024-08-10", 
    status: "Rejected",
    stage: "Final Interview",
    nextStep: "Position filled by internal candidate",
    recruiter: "Maria Santos",
  },
];

export const RECOMMENDED_SKILLS = [
  { skill: "Power BI", demand: "High", courses: 12 },
  { skill: "Energy Modeling", demand: "Medium", courses: 8 },
  { skill: "Grid Integration", demand: "High", courses: 6 },
  { skill: "Sustainability Reporting", demand: "Medium", courses: 15 },
];