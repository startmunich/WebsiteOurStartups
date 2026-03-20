import type { Metadata } from 'next'
import CTA from '@/components/CTA'
import Hero from '@/components/Hero'
import HeroCard from '@/components/HeroCard'
import {
    bayAreaDetailedDays,
    bayAreaHeroStats,
    bayAreaHosts,
    bayAreaOverviewItems,
    bayAreaTeamMembers,
    bayAreaTimelineMilestones,
} from '@/lib/startGoesBayAreaData'

export const metadata: Metadata = {
    title: 'START goes Bay Area | START Munich',
    description:
        'A selective international exchange program by START Munich connecting entrepreneurial talent with the Bay Area innovation ecosystem.',
}

function initials(name: string) {
    return name
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0]?.toUpperCase() ?? '')
        .join('')
}

export default function StartGoesBayAreaPage() {
    return (
        <main className="min-h-screen bg-brand-dark-blue">
            <Hero
                backgroundImage="/memberJourney/SF.png"
                title={
                    <>
                        START GOES
                        <br />
                        <span className="outline-text">BAY AREA</span>
                    </>
                }
                description="A selective international exchange program by START Munich connecting entrepreneurial talent from Europe with the San Francisco Bay Area innovation ecosystem."
            >
                <div className="flex flex-col gap-6">
                    {bayAreaHeroStats.map((stat) => (
                        <HeroCard key={stat.label}>
                            <p className="text-4xl font-black text-white mb-2">{stat.value}</p>
                            <p className="text-xs font-bold text-gray-300 uppercase tracking-widest">{stat.label}</p>
                        </HeroCard>
                    ))}
                </div>
            </Hero>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
                <div className="mb-10">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                        PROGRAM <span className="outline-text">OVERVIEW</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Built from our 2026 trip plan: high-intensity learning, direct ecosystem access, and execution-focused outcomes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {bayAreaOverviewItems.map((item) => (
                        <article key={item.title} className="bg-white/5 border border-white/10 p-6">
                            <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="mb-10">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                        TRIP <span className="outline-text">TIMELINE</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Complete journey milestones and detailed Bay Area visits from week two.
                    </p>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                    <div className="bg-white/5 border border-white/10 p-6 md:p-8">
                        <h3 className="text-2xl font-black text-white mb-8">Full Journey</h3>

                        <div className="relative pl-7 border-l border-white/20 space-y-8">
                            {bayAreaTimelineMilestones.map((milestone) => (
                                <article key={`${milestone.date}-${milestone.title}`} className="relative">
                                    <span className="absolute -left-[34px] top-1.5 w-3 h-3 rounded-full bg-brand-pink" />
                                    <p className="text-xs font-bold uppercase tracking-wider text-brand-pink mb-1">{milestone.date}</p>
                                    <h4 className="text-lg font-bold text-white mb-1.5">{milestone.title}</h4>
                                    <p className="text-sm text-gray-300 leading-relaxed">{milestone.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-6 md:p-8">
                        <h3 className="text-2xl font-black text-white mb-8">Detailed Bay Area Visits</h3>

                        <div className="space-y-6">
                            {bayAreaDetailedDays.map((day) => (
                                <article key={day.date} className="border border-white/10 bg-[#011152]/30 p-5">
                                    <p className="text-xs font-bold uppercase tracking-wider text-brand-pink mb-1">{day.date}</p>
                                    <h4 className="text-base font-bold text-white mb-1">{day.theme}</h4>
                                    <ul className="mt-4 space-y-3">
                                        {day.visits.map((visit) => (
                                            <li key={`${day.date}-${visit.time}-${visit.name}`} className="text-sm text-gray-200">
                                                <span className="font-bold text-white">{visit.time}</span>
                                                <span className="text-gray-400"> · </span>
                                                <span className="font-semibold text-white">{visit.name}</span>
                                                <span className="text-gray-400"> · {visit.location}</span>
                                                {visit.note ? <p className="text-gray-400 mt-1">{visit.note}</p> : null}
                                            </li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="mb-10">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                        HOSTS & <span className="outline-text">PARTNERS</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Selected hosts and ecosystem touchpoints from the 2026 trip plan.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {bayAreaHosts.map((host) => (
                        <div
                            key={host.name}
                            className="h-20 bg-white/5 border border-white/10 flex items-center justify-center text-center px-3"
                        >
                            <p className="text-sm font-bold text-gray-100 uppercase tracking-wide">{host.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="mb-10">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                        ORGA <span className="outline-text">TEAM</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Team members referenced in the planning data for this Bay Area chapter.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {bayAreaTeamMembers.map((member) => (
                        <article key={member.name} className="bg-white/5 border border-white/10 p-6 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-brand-pink/25 border border-brand-pink/40 flex items-center justify-center">
                                <span className="text-sm font-black text-white">{initials(member.name)}</span>
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-white">{member.name}</h3>
                                <p className="text-sm text-gray-400 uppercase tracking-wide">{member.role}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                <CTA
                    title="Collaborate with START goes Bay Area"
                    description="Want to host a session, support future chapters, or connect with the team? Reach out directly."
                    buttons={[
                        { label: 'Contact Team', href: 'mailto:bayarea@startmunich.de', variant: 'primary' },
                        { label: 'START Munich', href: 'https://www.startmunich.de/', external: true, variant: 'secondary' },
                    ]}
                />
            </section>
        </main>
    )
}
