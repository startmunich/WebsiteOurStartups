'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import {
    bayAreaYearContent,
} from '@/lib/startGoesBayAreaData'
import { useInView } from '@/lib/hooks'
import MemberCard from '@/components/MemberCard'
import BayAreaYearPreview from './BayAreaYearPreview'
import type { BayAreaVisit, BayAreaWeekGroup, BayAreaYearId } from '../types'

interface Member {
    id: number
    name: string
    imageUrl: string
    linkedinUrl?: string
}

interface BayAreaYearTabsProps {
    activeYear: BayAreaYearId
}

const parseNumericStat = (value: string) => {
    const match = value.match(/\d+/)
    if (!match || match.index === undefined) {
        return null
    }

    const numberPart = match[0]
    const prefix = value.slice(0, match.index)
    const suffix = value.slice(match.index + numberPart.length)

    return {
        number: Number.parseInt(numberPart, 10),
        prefix,
        suffix,
    }
}

function AnimatedStatValue({ value, animate, duration = 900 }: { value: string; animate: boolean; duration?: number }) {
    const parsed = parseNumericStat(value)
    const targetNumber = parsed?.number ?? null
    const [animatedNumber, setAnimatedNumber] = useState(targetNumber ?? 0)

    useEffect(() => {
        if (targetNumber === null || targetNumber <= 0) {
            return
        }

        if (!animate) {
            setAnimatedNumber(targetNumber)
            return
        }

        let frameId = 0
        const start = performance.now()

        setAnimatedNumber(0)

        const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            const easedProgress = 1 - Math.pow(1 - progress, 3)
            setAnimatedNumber(Math.round(targetNumber * easedProgress))

            if (progress < 1) {
                frameId = window.requestAnimationFrame(tick)
            }
        }

        frameId = window.requestAnimationFrame(tick)

        return () => {
            window.cancelAnimationFrame(frameId)
        }
    }, [animate, targetNumber, duration])

    if (!parsed) {
        return <>{value}</>
    }

    const numericDisplay = animate ? animatedNumber : parsed.number
    const suffixClassName = parsed.suffix.includes('+') ? 'text-brand-pink' : ''

    return (
        <>
            {parsed.prefix}
            {numericDisplay}
            {parsed.suffix ? <span className={suffixClassName}>{parsed.suffix}</span> : null}
        </>
    )
}

export default function BayAreaYearTabs({ activeYear }: BayAreaYearTabsProps) {
    const [members, setMembers] = useState<Member[]>([])
    const factsView = useInView(0.05)
    const autoScrollSpeedPxPerSecond = 18
    const autoResumeDelayMs = 2000
    const edgePauseMs = 700
    const carouselRefs = useRef<Record<BayAreaWeekGroup, HTMLDivElement | null>>({
        'Week 1': null,
        'Week 2': null,
    })
    const pauseUntilRef = useRef<Record<BayAreaWeekGroup, number>>({
        'Week 1': 0,
        'Week 2': 0,
    })
    const scrollDirectionRef = useRef<Record<BayAreaWeekGroup, 1 | -1>>({
        'Week 1': 1,
        'Week 2': -1,
    })

    const activeContent = useMemo(
        () => bayAreaYearContent.find((item) => item.id === activeYear) ?? bayAreaYearContent[0],
        [activeYear]
    )

    // Fetch members on mount
    useEffect(() => {
        const loadMembers = async () => {
            try {
                const response = await fetch('/api/members')
                if (!response.ok) throw new Error('Failed to fetch members')
                const data = await response.json()
                setMembers(data)
            } catch (error) {
                console.error('Error fetching members:', error)
                setMembers([])
            }
        }
        loadMembers()
    }, [])

    // Get team member data from API by matching names
    const getTeamMemberData = (name: string) => {
        return members.find(m => m.name.toLowerCase() === name.toLowerCase())
    }

    const weekGroups: BayAreaWeekGroup[] = ['Week 1', 'Week 2']
    const groupedDetailedDays = weekGroups
        .map((weekGroup) => ({
            weekGroup,
            days: activeContent.detailedDays.filter((day) => day.weekGroup === weekGroup),
        }))
        .filter((group) => group.days.length > 0)

    const formatDayWithWeekday = (dateValue: string) => {
        const parsedDate = new Date(dateValue)
        if (Number.isNaN(parsedDate.getTime())) return dateValue

        const weekday = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(parsedDate)
        return `${weekday} · ${dateValue}`
    }

    const visitBadge = (visitType: BayAreaVisit['visitType']) => {
        if (visitType === 'company') return 'Company Visit'
        if (visitType === 'community') return 'Community Event'
        if (visitType === 'hackathon') return 'Hackathon'
        return 'Person Visit'
    }

    const pauseAutoScroll = (weekGroup: BayAreaWeekGroup, ms = autoResumeDelayMs) => {
        pauseUntilRef.current[weekGroup] = performance.now() + ms
    }

    useEffect(() => {
        let frameId = 0
        let previousTimestamp = performance.now()

        const tick = (timestamp: number) => {
            const deltaSeconds = (timestamp - previousTimestamp) / 1000
            previousTimestamp = timestamp

            weekGroups.forEach((weekGroup) => {
                const container = carouselRefs.current[weekGroup]
                if (!container) return

                const maxScrollLeft = container.scrollWidth - container.clientWidth
                if (maxScrollLeft <= 0) return

                if (timestamp < pauseUntilRef.current[weekGroup]) {
                    return
                }

                const direction = scrollDirectionRef.current[weekGroup]
                let nextPosition = container.scrollLeft + direction * autoScrollSpeedPxPerSecond * deltaSeconds

                if (nextPosition <= 0) {
                    nextPosition = 0
                    scrollDirectionRef.current[weekGroup] = 1
                    pauseAutoScroll(weekGroup, edgePauseMs)
                } else if (nextPosition >= maxScrollLeft) {
                    nextPosition = maxScrollLeft
                    scrollDirectionRef.current[weekGroup] = -1
                    pauseAutoScroll(weekGroup, edgePauseMs)
                }

                container.scrollLeft = nextPosition
            })

            frameId = window.requestAnimationFrame(tick)
        }

        frameId = window.requestAnimationFrame(tick)
        return () => window.cancelAnimationFrame(frameId)
    }, [activeYear])

    if (activeContent.isPreview) {
        return <BayAreaYearPreview yearLabel={activeContent.label} />
    }

    return (
        <div ref={factsView.ref}>
            <div className={`mb-10 transition-all duration-700 ${factsView.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <span className="text-brand-pink text-sm font-bold tracking-[0.3em] uppercase">Program Year</span>
                <h3 className="text-4xl sm:text-5xl font-black text-white mt-3">THE HIGHLIGHTS</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20">
                <div className={`md:col-span-7 transition-all duration-700 delay-100 ${factsView.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="relative bg-gradient-to-br from-brand-pink/20 via-brand-pink/10 to-transparent border border-brand-pink/20 rounded-[2rem] p-8 sm:p-10 h-full overflow-hidden">
                        <div className="absolute top-0 right-0 w-28 h-28 bg-brand-pink/10 rounded-bl-[72px]" />
                        <div className="absolute -bottom-4 -left-4 w-20 h-20 border-2 border-brand-pink/20 rounded-full" />

                        <div className="relative">
                            <div className="text-gray-400 text-sm font-medium uppercase tracking-[0.2em] mb-6">{activeContent.label} Key Visits</div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {activeContent.highlightVisits.map((highlight) => (
                                    <article
                                        key={`${activeContent.id}-${highlight.name}`}
                                        className="border border-white/15 bg-white/5 rounded-[1.25rem] overflow-hidden hover:border-brand-pink/35 hover:bg-white/[0.08] transition-all duration-500"
                                    >
                                        {highlight.websiteUrl ? (
                                            <a
                                                href={highlight.websiteUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="block h-full p-4 transition-colors hover:bg-white/[0.06]"
                                            >
                                                <div className="h-14 mb-3 flex items-center justify-start">
                                                    <img
                                                        src={highlight.logoPath ?? '/startlogo.svg'}
                                                        alt={`${highlight.name} logo`}
                                                        className="h-12 w-auto max-w-[150px] object-contain"
                                                    />
                                                </div>
                                                <h4 className="text-sm font-bold text-white mb-1">{highlight.name}</h4>
                                                <p className="text-xs text-gray-300 uppercase tracking-wide">{highlight.context}</p>
                                            </a>
                                        ) : (
                                            <div className="p-4">
                                                <div className="h-14 mb-3 flex items-center justify-start">
                                                    <img
                                                        src={highlight.logoPath ?? '/startlogo.svg'}
                                                        alt={`${highlight.name} logo`}
                                                        className="h-12 w-auto max-w-[150px] object-contain"
                                                    />
                                                </div>
                                                <h4 className="text-sm font-bold text-white mb-1">{highlight.name}</h4>
                                                <p className="text-xs text-gray-300 uppercase tracking-wide">{highlight.context}</p>
                                            </div>
                                        )}
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-5 flex flex-col gap-6">
                    {activeContent.heroStats[0] ? (
                        <div className={`relative bg-white/5 border border-white/10 rounded-[1.5rem] p-8 hover:border-brand-pink/30 hover:bg-white/[0.07] transition-all duration-700 delay-200 ${factsView.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className="flex items-end justify-between">
                                <div>
                                    <div className="text-gray-500 text-xs font-medium uppercase tracking-[0.2em] mb-2">
                                        {activeContent.heroStats[0].label}
                                    </div>
                                    <div className="text-5xl sm:text-6xl font-black text-white tabular-nums">
                                        <AnimatedStatValue
                                            key={`${activeContent.id}-${activeContent.heroStats[0].label}-${activeContent.heroStats[0].value}`}
                                            value={activeContent.heroStats[0].value}
                                            animate={factsView.visible}
                                        />
                                    </div>
                                </div>
                                <div className="w-14 h-14 rounded-xl bg-brand-pink/10 flex items-center justify-center">
                                    <svg className="w-7 h-7 text-brand-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ) : null}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {activeContent.heroStats.slice(1).map((stat, index) => (
                            <div
                                key={stat.label}
                                className={`relative bg-white/5 border border-white/10 rounded-[1.5rem] p-6 hover:border-brand-pink/30 hover:bg-white/[0.07] transition-all duration-700 ${factsView.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${index === 0 ? 'delay-300' : 'delay-400'}`}
                            >
                                <div className="text-gray-500 text-xs font-medium uppercase tracking-[0.2em] mb-2">{stat.label}</div>
                                <div className="text-4xl sm:text-5xl font-black text-white tabular-nums">
                                    <AnimatedStatValue
                                        key={`${activeContent.id}-${stat.label}-${stat.value}`}
                                        value={stat.value}
                                        animate={factsView.visible}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mb-10">
                <span className="text-brand-pink text-sm font-bold tracking-[0.3em] uppercase">Program</span>
                <h3 className="text-4xl sm:text-5xl font-black text-white mt-3">TRIP TIMELINE</h3>
                <p className="text-sm text-gray-400 mt-3">{activeContent.timelineIntro}</p>
            </div>

            {groupedDetailedDays.length > 0 ? (
                <div className="space-y-10 mb-10">
                    {groupedDetailedDays.map((group) => (
                        <section key={`${activeContent.id}-${group.weekGroup}`}>
                            <div className="flex items-center gap-3 mb-4 px-1">
                                <span className="inline-flex items-center px-3 py-1 border border-brand-pink/60 bg-brand-pink/20 text-xs font-bold uppercase tracking-widest text-brand-pink">
                                    {group.weekGroup}
                                </span>
                                <p className="text-xs text-gray-400 uppercase tracking-widest">{group.days.length} days</p>
                            </div>

                            <div className="relative overflow-hidden">
                                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-brand-dark-blue via-brand-dark-blue/80 to-transparent" />
                                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-brand-dark-blue via-brand-dark-blue/80 to-transparent" />

                                <div
                                    ref={(element) => {
                                        carouselRefs.current[group.weekGroup] = element
                                    }}
                                    className="overflow-x-auto overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [scroll-padding-inline:2.5rem]"
                                    onPointerDown={() => {
                                        pauseAutoScroll(group.weekGroup, autoResumeDelayMs)
                                    }}
                                    onWheel={(event) => {
                                        if (Math.abs(event.deltaX) > 0 || Math.abs(event.deltaY) > 0) {
                                            pauseAutoScroll(group.weekGroup, autoResumeDelayMs)
                                        }
                                    }}
                                    onTouchStart={() => {
                                        pauseAutoScroll(group.weekGroup, autoResumeDelayMs)
                                    }}
                                >

                                    <div className="flex min-w-max gap-5 py-1 px-10 sm:px-12">
                                        {group.days.map((day, dayIndex) => (
                                            <article
                                                key={`${activeContent.id}-${group.weekGroup}-${day.date}-${dayIndex}`}
                                                className="w-[86vw] max-w-[460px] sm:w-[420px] border border-white/10 bg-white/5 rounded-[1.5rem] p-5 hover:border-brand-pink/30 hover:bg-white/[0.07] transition-all duration-300"
                                            >
                                                <p className="text-xs font-bold uppercase tracking-wider text-brand-pink mb-1">{formatDayWithWeekday(day.date)}</p>
                                                <h4 className="text-lg font-bold text-white mb-1">{day.heading}</h4>
                                                <p className="text-sm text-gray-300 leading-relaxed">{day.subheading}</p>

                                                <ul className="mt-5 space-y-3 border-t border-white/10 pt-4">
                                                    {day.visits.map((visit, visitIndex) => {
                                                        const visitHref = visit.visitType === 'company'
                                                            ? visit.websiteUrl
                                                            : visit.visitType === 'person'
                                                                ? visit.personLinkedInUrl
                                                                : undefined

                                                        const visitBody = (
                                                            <>
                                                                <span className="inline-flex items-center px-1.5 py-0.5 border border-brand-pink/50 bg-brand-pink/15 text-[9px] font-bold uppercase tracking-wide text-brand-pink mb-2">
                                                                    {visitBadge(visit.visitType)}
                                                                </span>

                                                                <div className="flex items-center gap-2 text-sm text-gray-200 whitespace-nowrap overflow-x-auto">
                                                                    {visit.visitType === 'company' && visit.logoPath && (
                                                                        <img
                                                                            src={visit.logoPath}
                                                                            alt={`${visit.name} logo`}
                                                                            className="w-5 h-5 object-contain flex-shrink-0"
                                                                        />
                                                                    )}
                                                                    <span className="font-semibold text-white">{visit.name}</span>
                                                                    <span className="text-gray-400">· {visit.location}</span>
                                                                </div>

                                                                <p className="text-gray-300 mt-1">{visit.description}</p>
                                                            </>
                                                        )

                                                        return (
                                                            <li key={`${activeContent.id}-${group.weekGroup}-${day.date}-${visit.name}-${visit.location}-${visitIndex}`} className="text-sm text-gray-200">
                                                                {visitHref ? (
                                                                    <a
                                                                        href={visitHref}
                                                                        target="_blank"
                                                                        rel="noreferrer"
                                                                        className="block rounded-md border border-white/10 bg-white/[0.03] p-3 transition-colors hover:bg-white/[0.08]"
                                                                    >
                                                                        {visitBody}
                                                                    </a>
                                                                ) : null}
                                                                {!visitHref ? <div className="rounded-md border border-white/10 bg-white/[0.03] p-3">{visitBody}</div> : null}
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </article>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
            ) : (
                <div className="border border-white/10 bg-white/5 rounded-[1.5rem] p-5 hover:border-brand-pink/30 hover:bg-white/[0.07] transition-all duration-300 mb-10">
                    <p className="text-sm text-gray-200 leading-relaxed">
                        {activeContent.detailedVisitsPreviewText ?? 'Detailed schedule coming soon.'}
                    </p>
                </div>
            )}

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-8">
                <div className="bg-white/5 border border-white/10 rounded-[2rem] p-6 md:p-8">
                    <h3 className="text-2xl font-black text-white mb-2">Hosts & Partners</h3>
                    <p className="text-sm text-gray-400 mb-6">{activeContent.hostsIntro}</p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {activeContent.hosts.map((host) => (
                            <div
                                key={`${activeContent.id}-${host.name}`}
                                className="h-20 bg-white/5 border border-white/10 rounded-[1.5rem] flex flex-col items-center justify-center text-center px-3 gap-2 hover:border-brand-pink/30 hover:bg-white/[0.07] transition-all duration-300"
                            >
                                {host.logoPath && (
                                    <img
                                        src={host.logoPath}
                                        alt={`${host.name} logo`}
                                        className="h-8 w-8 object-contain flex-shrink-0"
                                    />
                                )}
                                <p className="text-sm font-bold text-gray-100 uppercase tracking-wide line-clamp-2">{host.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-[2rem] p-6 md:p-8">
                    <h3 className="text-2xl font-black text-white mb-2">Orga Team</h3>
                    <p className="text-sm text-gray-400 mb-6">{activeContent.teamIntro}</p>

                    {activeContent.teamMembers.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {activeContent.teamMembers.map((member) => {
                                const memberData = getTeamMemberData(member.name)
                                // Fallback: show team member even if not found in API (shows placeholder image)
                                if (memberData) {
                                    return (
                                        <MemberCard
                                            key={`${activeContent.id}-${member.name}`}
                                            name={member.name}
                                            role={member.role}
                                            imageUrl={memberData.imageUrl}
                                            linkedinUrl={memberData.linkedinUrl}
                                        />
                                    )
                                } else {
                                    // Fallback for team members not in API yet
                                    return (
                                        <MemberCard
                                            key={`${activeContent.id}-${member.name}`}
                                            name={member.name}
                                            role={member.role}
                                            imageUrl="/batch.jpeg"
                                        />
                                    )
                                }
                            })}
                        </div>
                    ) : (
                        <div className="border border-white/10 bg-white/5 rounded-[1.5rem] p-5 hover:border-brand-pink/30 hover:bg-white/[0.07] transition-all duration-300">
                            <p className="text-sm text-gray-200">Team announcement coming soon.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
