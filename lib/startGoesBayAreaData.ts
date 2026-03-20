export interface BayAreaHeroStat {
    label: string
    value: string
}

export interface BayAreaOverviewItem {
    title: string
    description: string
}

export interface BayAreaTimelineMilestone {
    date: string
    title: string
    description: string
}

export interface BayAreaVisit {
    time: string
    name: string
    location: string
    note?: string
}

export interface BayAreaDetailedDay {
    date: string
    theme: string
    visits: BayAreaVisit[]
}

export interface BayAreaHost {
    name: string
}

export interface BayAreaTeamMember {
    name: string
    role: string
}

export const bayAreaHeroStats: BayAreaHeroStat[] = [
    { label: 'Duration', value: '2 Weeks' },
    { label: 'Visits in 2026 Plan', value: '17' },
    { label: 'Curated Participants', value: '20' },
]

export const bayAreaOverviewItems: BayAreaOverviewItem[] = [
    {
        title: 'Selective Exchange Program',
        description:
            'START goes Bay Area is a selective international exchange program organized by START Munich. The trip connects outstanding entrepreneurial talent from Europe with the innovation ecosystem in the San Francisco Bay Area.',
    },
    {
        title: 'Direct Access to Builders',
        description:
            'Across two weeks, participants meet founders, researchers, investors, and operators in person. The focus is practical: honest conversations, real product insights, and first-principles thinking from people building at the frontier.',
    },
    {
        title: 'Execution-First Experience',
        description:
            'The program combines company visits, ecosystem sessions, and an internal moonshot hackathon. The goal is to return home with stronger conviction, clearer frameworks, and momentum to execute.',
    },
]

export const bayAreaTimelineMilestones: BayAreaTimelineMilestone[] = [
    {
        date: 'February 28, 2026',
        title: 'Arrival in San Francisco',
        description:
            'Team arrives at SFO, picks up cars, checks into Airbnbs, and sets up logistics for the trip.',
    },
    {
        date: 'March 1, 2026',
        title: 'Golden Gate Kickoff',
        description:
            'Official start with full-team kickoff at the Golden Gate Bridge and first alignment day in the city.',
    },
    {
        date: 'March 2, 2026',
        title: 'Transatlantic Builders & AI Tools',
        description:
            'Visits at GACC West / Start2 Group and CodeRabbit focused on market entry and applied AI products.',
    },
    {
        date: 'March 3, 2026',
        title: 'Deep Tech & Climate Tech',
        description:
            'Sessions with Nvidia and WindBorne Systems to learn about infrastructure, hardware, and climate intelligence.',
    },
    {
        date: 'March 4, 2026',
        title: 'Silicon Valley Legends',
        description:
            'Exchange with Sebastian Thrun on first-principles thinking and building frontier companies.',
    },
    {
        date: 'March 5, 2026',
        title: 'Neurotech, Hypergrowth & Founder Energy',
        description:
            'Conversations at Maschmeyer Group, Coherence Neuro, and Rippling on scaling and founder execution.',
    },
    {
        date: 'March 6, 2026',
        title: 'Stanford & Hackerhouse Culture',
        description:
            'Stanford robotics day plus evening community experience with The Residency.',
    },
    {
        date: 'March 7, 2026',
        title: 'Internal Moonshot Hackathon',
        description:
            'Internal sprint to prototype bold ideas inspired by the first week of company and ecosystem sessions.',
    },
    {
        date: 'March 9–13, 2026',
        title: 'Week 2 Bay Area Visits',
        description:
            'A dense run of deep-tech, VC, and founder visits across Mountain View, San Jose, Oakland, and San Francisco.',
    },
    {
        date: 'March 14, 2026',
        title: 'Departure & Wrap-Up',
        description:
            'Final reflection day, closing conversations, and evening departure flight back home.',
    },
]

export const bayAreaDetailedDays: BayAreaDetailedDay[] = [
    {
        date: 'March 9, 2026',
        theme: 'Frontier AI Hardware & Robotics',
        visits: [
            {
                time: '09:00–11:30',
                name: 'Google X Preparation Block',
                location: 'In our Airbnbs',
                note: 'Finalize workshop structure before external sessions.',
            },
            {
                time: '13:00–15:00',
                name: 'Etched',
                location: 'San Jose',
                note: 'AI accelerators and high-performance inference hardware.',
            },
            {
                time: '16:00–17:00',
                name: 'Intrinsic (Google X spin-off)',
                location: 'Mountain View',
                note: 'Robotics software and autonomy systems.',
            },
        ],
    },
    {
        date: 'March 10, 2026',
        theme: 'Moonshots & AI-Driven Biotech',
        visits: [
            {
                time: '09:45–13:00',
                name: 'Google X',
                location: 'Mountain View',
                note: 'Tour, pitch session, rapid evaluation exchange, and lunch.',
            },
            {
                time: '16:00–17:30',
                name: 'Inflammatix',
                location: 'Sunnyvale',
                note: 'Machine learning meets molecular diagnostics.',
            },
        ],
    },
    {
        date: 'March 11, 2026',
        theme: 'Climate Infrastructure + YC',
        visits: [
            {
                time: '10:00–11:30',
                name: 'Sofar Ocean',
                location: 'San Francisco',
            },
            {
                time: '13:00–14:30',
                name: 'Magrathea',
                location: 'Oakland',
                note: 'Carbon-neutral magnesium from seawater and brines.',
            },
            {
                time: '15:30–16:30',
                name: 'Y Combinator',
                location: 'San Francisco',
            },
        ],
    },
    {
        date: 'March 12, 2026',
        theme: 'Frontier VC & Founder-Level Thinking',
        visits: [
            {
                time: '10:00–11:30',
                name: 'Boost VC',
                location: 'San Francisco',
            },
            {
                time: '12:30–14:00',
                name: 'Chris Bach Session',
                location: 'San Francisco',
            },
            {
                time: '15:30–16:30',
                name: 'Pillsbury',
                location: 'San Francisco',
            },
            {
                time: '17:00',
                name: 'Founders Inc',
                location: 'San Francisco',
            },
            {
                time: '18:00–21:00',
                name: 'German Founders Dinner',
                location: 'San Francisco',
            },
        ],
    },
    {
        date: 'March 13, 2026',
        theme: 'AI, Satellite Intelligence & Food Tech',
        visits: [
            {
                time: '10:00–11:30',
                name: 'satlyt.ai',
                location: 'Sunnyvale',
            },
            {
                time: '14:00–16:00',
                name: 'Savor',
                location: 'San Jose',
            },
            {
                time: '19:30–21:00',
                name: 'Comedians Roast SF Tech Roast Show',
                location: 'San Francisco',
            },
        ],
    },
]

export const bayAreaHosts: BayAreaHost[] = [
    { name: 'GACC West' },
    { name: 'Start2 Group' },
    { name: 'CodeRabbit' },
    { name: 'Nvidia' },
    { name: 'WindBorne Systems' },
    { name: 'Sebastian Thrun Session' },
    { name: 'Maschmeyer Group' },
    { name: 'Coherence Neuro' },
    { name: 'Rippling' },
    { name: 'Stanford University' },
    { name: 'The Residency' },
    { name: 'Google X' },
    { name: 'Inflammatix' },
    { name: 'Sofar Ocean' },
    { name: 'Magrathea' },
    { name: 'Y Combinator' },
    { name: 'Boost VC' },
    { name: 'Pillsbury' },
    { name: 'Founders Inc' },
    { name: 'satlyt.ai' },
    { name: 'Savor' },
]

export const bayAreaTeamMembers: BayAreaTeamMember[] = [
    { name: 'Annemarie Schimkat', role: 'Orga Team' },
    { name: 'Christopher Hassinger', role: 'Orga Team' },
    { name: 'Philipp Noel von Lovenberg', role: 'Orga Team' },
    { name: 'Arian Gohari', role: 'Orga Team' },
    { name: 'Linde Liu', role: 'Orga Team' },
]
