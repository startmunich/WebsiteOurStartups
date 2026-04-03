import { bayAreaVisitCompanyLogos } from '@/lib/startGoesBayAreaData'

export default function BayAreaCompanyLogoCarousel() {
    if (bayAreaVisitCompanyLogos.length === 0) {
        return null
    }

    const loopedLogos = [...bayAreaVisitCompanyLogos, ...bayAreaVisitCompanyLogos]

    return (
        <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-x-hidden py-8">
            <div className="relative">
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-brand-dark-blue via-brand-dark-blue/80 to-transparent" />
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-brand-dark-blue via-brand-dark-blue/80 to-transparent" />

                <div className="overflow-hidden">
                    <div className="animate-scroll-nonstop gap-5 px-6 sm:px-10" style={{ animationDuration: '95s' }}>
                        {loopedLogos.map((logo, index) => {
                            const content = (
                                <>
                                    <img
                                        src={logo.logoPath}
                                        alt={`${logo.name} logo`}
                                        className="h-10 w-auto max-w-[130px] object-contain sm:h-12 sm:max-w-[160px]"
                                    />
                                    <span className="sr-only">{logo.name}</span>
                                </>
                            )

                            return (
                                <div
                                    key={`${logo.name}-${index}`}
                                    aria-hidden={index >= bayAreaVisitCompanyLogos.length}
                                    className="flex h-24 min-w-[170px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] px-6 transition-colors hover:border-brand-pink/35 hover:bg-white/[0.1]"
                                >
                                    {logo.websiteUrl ? (
                                        <a
                                            href={logo.websiteUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex h-full w-full items-center justify-center"
                                            aria-label={`${logo.name} website`}
                                        >
                                            {content}
                                        </a>
                                    ) : (
                                        content
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
