import type { ReceivedWeeklyReport, ReportSubmitter, WeeklyReport } from "./weekly-report.types";

export function getWeekLabel(weekOf: string): string {
    const monday = new Date(weekOf + "T00:00:00");
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);
    const fmt = (d: Date) => d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    return `Week of ${fmt(monday)} – ${fmt(sunday)}, ${monday.getFullYear()}`;
}

export function getCurrentWeekStart(): string {
    const now = new Date();
    const day = now.getDay();
    const diff = now.getDate() - day + (day === 0 ? -6 : 1);
    const monday = new Date(now.setDate(diff));
    return monday.toISOString().split("T")[0];
}

export const reportProjects: string[] = [
    "N-A",
    "Portal Redesign",
    "API Gateway",
    "Mobile App v2",
    "Data Pipeline",
    "Auth Service",
    "Analytics Dashboard",
    "Infra Migration",
];

export const reportSubmitters: ReportSubmitter[] = [
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

export const mockSentReports: WeeklyReport[] = [
    {
        id: "wr-001",
        weekOf: "2026-07-28",
        weekLabel: getWeekLabel("2026-07-28"),
        status: "Pending",
        entries: [
            {
                id: "we1",
                projectName: "Portal Redesign",
                description:
                    "Completed the sidebar component refactor and updated all navigation items. Integrated new collapsible menu patterns.",
            },
            {
                id: "we2",
                projectName: "API Gateway",
                description:
                    "Fixed rate limiting middleware bug that caused false positives under load. Added comprehensive test coverage.",
            },
            {
                id: "we3",
                projectName: "N-A",
                description:
                    "Participated in sprint planning and daily standups. Reviewed 4 PRs from the team.",
            },
        ],
        sendTo: ["manager@dsr.com", "team-lead@dsr.com"],
        ccTo: ["hr@dsr.com"],
        submittedAt: "2026-07-28T17:30:00Z",
    },
    {
        id: "wr-002",
        weekOf: "2026-07-21",
        weekLabel: getWeekLabel("2026-07-21"),
        status: "Approved",
        entries: [
            {
                id: "we4",
                projectName: "Mobile App v2",
                description:
                    "Implemented push notification service for both iOS and Android platforms. Fixed deep linking edge cases.",
            },
            {
                id: "we5",
                projectName: "Analytics Dashboard",
                description:
                    "Designed and built new chart components for user engagement metrics. Integrated WebSocket real-time data streaming.",
            },
        ],
        sendTo: ["manager@dsr.com"],
        ccTo: [],
        submittedAt: "2026-07-21T17:00:00Z",
    },
    {
        id: "wr-003",
        weekOf: "2026-07-14",
        weekLabel: getWeekLabel("2026-07-14"),
        status: "Rejected",
        rejectionReason:
            "The API Gateway section needs more detail — what specifically was configured? Add metrics on error rate improvements.",
        entries: [
            {
                id: "we6",
                projectName: "API Gateway",
                description: "Worked on gateway configuration and performance improvements.",
            },
        ],
        sendTo: ["manager@dsr.com"],
        ccTo: [],
        submittedAt: "2026-07-14T17:00:00Z",
    },
    {
        id: "wr-004",
        weekOf: "2026-07-07",
        weekLabel: getWeekLabel("2026-07-07"),
        status: "Approved",
        entries: [
            {
                id: "we7",
                projectName: "Data Pipeline",
                description:
                    "Optimized ETL job performance achieving 40% reduction in processing time. Reduced memory footprint by 25%.",
            },
            {
                id: "we8",
                projectName: "Auth Service",
                description:
                    "Added OAuth2 PKCE flow for mobile clients. Wrote comprehensive integration tests — all passing.",
            },
            {
                id: "we9",
                projectName: "Infra Migration",
                description:
                    "Migrated 3 microservices from EC2 to ECS Fargate. Documented the process for the team.",
            },
            {
                id: "we10",
                projectName: "N-A",
                description:
                    "Conducted sprint retrospective and planning for the upcoming quarter.",
            },
        ],
        sendTo: ["manager@dsr.com", "pm@dsr.com"],
        ccTo: ["team-lead@dsr.com"],
        submittedAt: "2026-07-07T17:15:00Z",
    },
    {
        id: "wr-005",
        weekOf: "2026-06-30",
        weekLabel: getWeekLabel("2026-06-30"),
        status: "Approved",
        entries: [
            {
                id: "we11",
                projectName: "Portal Redesign",
                description:
                    "Refactored CSS variables and design tokens. Migrated to the new theme system across all components.",
            },
            {
                id: "we12",
                projectName: "Portal Redesign",
                description:
                    "Built the dashboard stats cards, employee table, attendance chart, and activity feed components.",
            },
        ],
        sendTo: ["manager@dsr.com"],
        ccTo: [],
        submittedAt: "2026-06-30T17:00:00Z",
    },
    {
        id: "wr-006",
        weekOf: "2026-07-28",
        weekLabel: getWeekLabel("2026-07-28"),
        status: "Pending",
        entries: [
            {
                id: "we13",
                projectName: "Data Pipeline",
                description:
                    "Built new Salesforce data ingestion connector. Added data validation and error handling for malformed records.",
            },
        ],
        sendTo: ["manager@dsr.com"],
        ccTo: ["data-team@dsr.com"],
        submittedAt: "2026-07-28T18:00:00Z",
    },
];

export const mockReceivedReports: ReceivedWeeklyReport[] = [
    {
        id: "rwr-001",
        weekOf: "2026-07-28",
        weekLabel: getWeekLabel("2026-07-28"),
        status: "Pending",
        entries: [
            {
                id: "rwe1",
                projectName: "Portal Redesign",
                description:
                    "Updated color tokens for dark mode. Created new icon set for sidebar navigation. Designed empty states for all list views.",
            },
            {
                id: "rwe2",
                projectName: "Mobile App v2",
                description:
                    "Redesigned onboarding flow with 3 new screens. Fixed layout issues on tablet breakpoints.",
            },
            {
                id: "rwe3",
                projectName: "N-A",
                description:
                    "Conducted usability testing session with 5 participants. Design review with product team.",
            },
        ],
        sendTo: ["manager@dsr.com", "design-lead@dsr.com"],
        ccTo: [],
        submittedBy: {
            id: "s3",
            name: "Ananya Patel",
            email: "ananya@dsr.com",
            avatar: "AP",
            department: "Design",
        },
        sharedAt: "2026-07-28T17:30:00Z",
    },
    {
        id: "rwr-002",
        weekOf: "2026-07-21",
        weekLabel: getWeekLabel("2026-07-21"),
        status: "Approved",
        entries: [
            {
                id: "rwe4",
                projectName: "Portal Redesign",
                description:
                    "Refactored component library to support the new design system. Created 20+ reusable UI components.",
            },
        ],
        sendTo: ["manager@dsr.com"],
        ccTo: [],
        submittedBy: {
            id: "s3",
            name: "Ananya Patel",
            email: "ananya@dsr.com",
            avatar: "AP",
            department: "Design",
        },
        sharedAt: "2026-07-21T17:00:00Z",
    },
    {
        id: "rwr-003",
        weekOf: "2026-07-28",
        weekLabel: getWeekLabel("2026-07-28"),
        status: "Pending",
        entries: [
            {
                id: "rwe5",
                projectName: "API Gateway",
                description:
                    "Load tested the gateway with 10k concurrent connections. Identified and fixed auth middleware bottleneck. Reduced p99 latency by 35%.",
            },
            {
                id: "rwe6",
                projectName: "Data Pipeline",
                description:
                    "Wrote automation scripts for data quality checks. Set up monitoring dashboards for pipeline health.",
            },
        ],
        sendTo: ["manager@dsr.com", "team-lead@dsr.com"],
        ccTo: ["infra@dsr.com"],
        submittedBy: {
            id: "s1",
            name: "Priya Sharma",
            email: "priya@dsr.com",
            avatar: "PS",
            department: "Engineering",
        },
        sharedAt: "2026-07-28T17:45:00Z",
    },
    {
        id: "rwr-004",
        weekOf: "2026-07-21",
        weekLabel: getWeekLabel("2026-07-21"),
        status: "Rejected",
        rejectionReason:
            "Entries need more specificity. The Data Pipeline section mentions automation but doesn't describe what was automated or the impact.",
        entries: [
            {
                id: "rwe7",
                projectName: "Data Pipeline",
                description:
                    "Worked on automation and monitoring improvements for the data pipeline.",
            },
            {
                id: "rwe8",
                projectName: "N-A",
                description: "Various meetings and administrative tasks.",
            },
        ],
        sendTo: ["manager@dsr.com"],
        ccTo: [],
        submittedBy: {
            id: "s1",
            name: "Priya Sharma",
            email: "priya@dsr.com",
            avatar: "PS",
            department: "Engineering",
        },
        sharedAt: "2026-07-21T17:00:00Z",
    },
    {
        id: "rwr-005",
        weekOf: "2026-07-28",
        weekLabel: getWeekLabel("2026-07-28"),
        status: "Pending",
        entries: [
            {
                id: "rwe9",
                projectName: "Analytics Dashboard",
                description:
                    "Prepared Q3 marketing metrics presentation. Set up A/B test tracking for landing page variants. Wrote campaign performance automation scripts.",
            },
        ],
        sendTo: ["manager@dsr.com"],
        ccTo: ["marketing-lead@dsr.com"],
        submittedBy: {
            id: "s5",
            name: "Neha Gupta",
            email: "neha@dsr.com",
            avatar: "NG",
            department: "Marketing",
        },
        sharedAt: "2026-07-28T17:20:00Z",
    },
    {
        id: "rwr-006",
        weekOf: "2026-07-21",
        weekLabel: getWeekLabel("2026-07-21"),
        status: "Approved",
        entries: [
            {
                id: "rwe10",
                projectName: "Analytics Dashboard",
                description:
                    "Built campaign ROI tracking module. Integrated with Google Ads and Meta Ads APIs for automated data pulling.",
            },
        ],
        sendTo: ["manager@dsr.com"],
        ccTo: [],
        submittedBy: {
            id: "s5",
            name: "Neha Gupta",
            email: "neha@dsr.com",
            avatar: "NG",
            department: "Marketing",
        },
        sharedAt: "2026-07-21T17:00:00Z",
    },
    {
        id: "rwr-007",
        weekOf: "2026-07-28",
        weekLabel: getWeekLabel("2026-07-28"),
        status: "Pending",
        entries: [
            {
                id: "rwe11",
                projectName: "Auth Service",
                description:
                    "Implemented SSO integration with Okta for enterprise customers. Wrote integration tests — all green.",
            },
            {
                id: "rwe12",
                projectName: "Infra Migration",
                description:
                    "Set up Terraform modules for staging environment. Configured Grafana monitoring dashboards with alerting rules.",
            },
        ],
        sendTo: ["manager@dsr.com"],
        ccTo: ["devops@dsr.com", "security@dsr.com"],
        submittedBy: {
            id: "s2",
            name: "Rahul Verma",
            email: "rahul@dsr.com",
            avatar: "RV",
            department: "Engineering",
        },
        sharedAt: "2026-07-28T17:50:00Z",
    },
];
