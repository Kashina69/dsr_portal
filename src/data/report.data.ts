import type { Submitter } from "@/types/report.type";

export const projects: string[] = [
  "N-A",
  "Portal Redesign",
  "API Gateway",
  "Mobile App v2",
  "Data Pipeline",
  "Auth Service",
  "Analytics Dashboard",
  "Infra Migration",
];

export const teamMembers: Submitter[] = [
  {
    id: "s1",
    name: "Priya Sharma",
    email: "priya@dsr.com",
    avatar: "PS",
    department: "Engineering",
  },
  {
    id: "s2",
    name: "Rahul Verma",
    email: "rahul@dsr.com",
    avatar: "RV",
    department: "Engineering",
  },
  { id: "s3", name: "Ananya Patel", email: "ananya@dsr.com", avatar: "AP", department: "Design" },
  { id: "s4", name: "Vikram Singh", email: "vikram@dsr.com", avatar: "VS", department: "Design" },
  { id: "s5", name: "Neha Gupta", email: "neha@dsr.com", avatar: "NG", department: "Marketing" },
  { id: "s6", name: "Arjun Nair", email: "arjun@dsr.com", avatar: "AN", department: "Finance" },
];
