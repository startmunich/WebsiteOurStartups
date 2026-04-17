'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';

export const dynamic = 'force-dynamic';

// Label Component - Consistent "//" labels throughout the page
function Label({
   children,
   className = '',
   style = {},
}: {
   children: React.ReactNode;
   className?: string;
   style?: React.CSSProperties;
}) {
   return (
      <span
         className={`font-mono uppercase tracking-[0.15em] ${className}`}
         style={{
            fontSize: '12px',
            color: 'var(--labs-text-body)',
            ...style,
         }}
      >
         {children}
      </span>
   );
}

// Section Header Component - Large centered section titles
function SectionHeader({ children }: { children: React.ReactNode }) {
   return (
      <div className='text-center mb-20'>
         <span
            className='font-mono uppercase tracking-[0.15em]'
            style={{
               fontSize: '16px',
               color: 'var(--labs-accent)',
            }}
         >
            {children}
         </span>
      </div>
   );
}

// Navigation Component
function LabsNavigation() {
   return (
      <header
         className='fixed top-0 left-0 right-0 z-50'
         style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(12px)' }}
      >
         <div className='max-w-[1400px] mx-auto px-6 md:px-12'>
            <div className='max-w-5xl mx-auto'>
               <div className='flex items-center justify-between h-20'>
                  {/* Logo */}
                  <a href='#' className='flex flex-col leading-none py-2'>
                     <span
                        className='labs-heading font-medium'
                        style={{ fontSize: '18px' }}
                     >
                        START LABS
                     </span>
                     <span
                        className='labs-meta mt-[2px]'
                        style={{ color: 'var(--labs-accent)' }}
                     >
                        // MEDTECH EDITION
                     </span>
                  </a>

                  {/* Desktop Navigation */}
                  <nav className='hidden md:flex items-center gap-8'>
                     <a
                        href='#manifesto'
                        className='labs-meta transition-all duration-200'
                        style={{ color: 'var(--labs-text-meta)' }}
                        onMouseEnter={(e) =>
                           (e.currentTarget.style.color =
                              'var(--labs-text-primary)')
                        }
                        onMouseLeave={(e) =>
                           (e.currentTarget.style.color =
                              'var(--labs-text-meta)')
                        }
                     >
                        About
                     </a>
                     <a
                        href='#program'
                        className='labs-meta transition-all duration-200'
                        style={{ color: 'var(--labs-text-meta)' }}
                        onMouseEnter={(e) =>
                           (e.currentTarget.style.color =
                              'var(--labs-text-primary)')
                        }
                        onMouseLeave={(e) =>
                           (e.currentTarget.style.color =
                              'var(--labs-text-meta)')
                        }
                     >
                        How it works
                     </a>
                     <a
                        href='#faq'
                        className='labs-meta transition-all duration-200'
                        style={{ color: 'var(--labs-text-meta)' }}
                        onMouseEnter={(e) =>
                           (e.currentTarget.style.color =
                              'var(--labs-text-primary)')
                        }
                        onMouseLeave={(e) =>
                           (e.currentTarget.style.color =
                              'var(--labs-text-meta)')
                        }
                     >
                        FAQ
                     </a>
                     <a
                        href='#apply'
                        className='labs-cta-button labs-cta-button-small ml-4'
                        style={{
                           borderColor: 'var(--labs-accent)',
                           color: 'var(--labs-accent)',
                        }}
                     >
                        Apply Now
                     </a>
                  </nav>

                  {/* Mobile CTA */}
                  <a
                     href='#apply'
                     className='md:hidden labs-cta-button labs-cta-button-small'
                     style={{
                        borderColor: 'var(--labs-accent)',
                        color: 'var(--labs-accent)',
                     }}
                  >
                     Apply
                  </a>
               </div>
            </div>
         </div>
      </header>
   );
}

// Hero Section
function HeroSection() {
   return (
      <section
         className='relative min-h-screen pt-20 overflow-hidden'
         style={{ background: 'var(--labs-bg)' }}
      >
         {/* Video Background */}
         <div className='absolute inset-0 z-0'>
            <video
               autoPlay
               muted
               loop
               playsInline
               poster='/labs/videos/START_LABS_poster.jpg'
               className='absolute inset-0 w-full h-full object-cover opacity-40'
            >
               <source
                  src='/labs/videos/START_LABS_trimmed_video.mp4'
                  type='video/mp4'
               />
            </video>
            <div className='absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/95'></div>
         </div>

         <div className='relative z-10 min-h-[calc(100vh-80px)] flex flex-col justify-end'>
            {/* Main Content */}
            <div className='max-w-[1400px] mx-auto px-6 md:px-12 pb-20 w-full'>
               <div className='max-w-5xl mx-auto'>
                  {/* Spec Label */}
                  {/* <div className='mb-8'>
                     <Label>// Medtech Edition</Label>
                  </div> */}

                  {/* Main Headline */}
                  <h1 className='mb-6'>
                     <div className='labs-heading text-[clamp(36px,8vw,72px)] leading-[0.9]'>
                        You're not a student.
                        <br />
                        you're a{' '}
                        <span style={{ color: 'var(--labs-accent)' }}>
                           founder.
                        </span>
                     </div>
                  </h1>

                  {/* Description */}
                  <div className='mb-6 max-w-2xl'>
                     <p
                        className='labs-body leading-relaxed'
                        style={{ fontSize: '12px' }}
                     >
                        Build your MedTech startup in 8 weeks. Like actually.
                     </p>
                  </div>

                  {/* CTA */}
                  <div className='mb-6'>
                     <a
                        href='https://tally.so/r/n9Axzp'
                        target='_blank'
                        rel='noopener'
                        className='labs-cta-button'
                        style={{
                           borderColor: 'var(--labs-accent)',
                           color: 'var(--labs-accent)',
                        }}
                     >
                        Apply Now
                     </a>
                  </div>

                  {/* Program Specs */}
                  <div className='flex items-center gap-4'>
                     <div>
                        <Label>Deadline: </Label>
                        <span
                           className='uppercase'
                           style={{
                              color: 'var(--labs-text-primary)',
                              fontSize: '12px',
                           }}
                        >
                           30 April 2026
                        </span>
                     </div>
                     <span style={{ fontSize: '12px' }}>·</span>
                     <div>
                        <Label>Capacity: </Label>
                        <span
                           className='uppercase'
                           style={{
                              color: 'var(--labs-text-primary)',
                              fontSize: '12px',
                           }}
                        >
                           Limited
                        </span>
                     </div>
                     <span style={{ fontSize: '12px' }}>·</span>
                     <div>
                        <Label>Location: </Label>
                        <span
                           className='uppercase'
                           style={{
                              color: 'var(--labs-text-primary)',
                              fontSize: '12px',
                           }}
                        >
                           Munich
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

// Organized By Section
function OrganizedBySection() {
   return (
      <section
         className='py-16 border-y'
         style={{
            background: 'var(--labs-bg)',
            borderColor: 'var(--labs-border)',
         }}
      >
         <div className='max-w-[1400px] mx-auto px-6 md:px-12'>
            <div className='flex flex-col items-center gap-6'>
               <Label>// Organized by</Label>
               <div className='flex items-center gap-6'>
                  <a
                     href='https://www.startmunich.de/'
                     target='_blank'
                     rel='noopener'
                     className='transition-opacity hover:opacity-100 opacity-60'
                  >
                     <img
                        alt='START Munich'
                        src='https://raw.githubusercontent.com/genepearl/start-labs-2026/main/images/startmunich.png'
                        className='h-11 w-auto mix-blend-screen'
                     />
                  </a>
                  <span className='labs-meta'>×</span>
                  <a
                     href='https://www.one-aim.org/'
                     target='_blank'
                     rel='noopener'
                     className='transition-opacity hover:opacity-100 opacity-60'
                  >
                     <img
                        alt='OneAIM'
                        src='https://raw.githubusercontent.com/genepearl/start-labs-2026/main/images/oneaim.png'
                        className='h-10 w-auto mix-blend-screen'
                     />
                  </a>
               </div>
            </div>
         </div>
      </section>
   );
}

// Problem Section
function ProblemSection() {
   return (
      <section
         className='labs-reveal relative py-32'
         style={{ background: 'var(--labs-bg)' }}
      >
         <div className='max-w-[1400px] mx-auto px-6 md:px-12'>
            <div className='max-w-5xl mx-auto'>
               {/* Section Header */}
               <SectionHeader>// Section 01: The Problem</SectionHeader>

               {/* Main Statement */}
               <h2 className='labs-heading text-[clamp(32px,5vw,56px)] leading-[1.1] mb-20'>
                  <span className='block'>World-class medicine.</span>
                  <span
                     className='block'
                     style={{ color: 'var(--labs-text-body)' }}
                  >
                     Stone-age infrastructure.
                  </span>
               </h2>

               {/* Problem Grid */}
               <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-20'>
                  <div
                     className='labs-reveal group p-10 labs-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)] cursor-default border-t border-transparent hover:border-[var(--labs-text-meta)]'
                     style={{ transitionDelay: '0ms' }}
                  >
                     <div
                        className='labs-heading mb-4 transition-colors duration-300 group-hover:text-[var(--labs-text-primary)]'
                        style={{ fontSize: 'var(--labs-size-heading-sm)' }}
                     >
                        Clinicians
                     </div>
                     <div
                        className='labs-body leading-relaxed transition-colors duration-300 group-hover:text-[var(--labs-text-body)]'
                        style={{ fontSize: '12px' }}
                     >
                        waste hours on{' '}
                        <span
                           className='transition-colors duration-300'
                           style={{ color: 'var(--labs-text-primary)' }}
                        >
                           paperwork
                        </span>
                     </div>
                  </div>
                  <div
                     className='labs-reveal group p-10 labs-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)] cursor-default border-t border-transparent hover:border-[var(--labs-text-meta)]'
                     style={{ transitionDelay: '100ms' }}
                  >
                     <div
                        className='labs-heading mb-4 transition-colors duration-300 group-hover:text-[var(--labs-text-primary)]'
                        style={{ fontSize: 'var(--labs-size-heading-sm)' }}
                     >
                        Hospitals
                     </div>
                     <div
                        className='labs-body leading-relaxed transition-colors duration-300 group-hover:text-[var(--labs-text-body)]'
                        style={{ fontSize: '12px' }}
                     >
                        run on{' '}
                        <span
                           className='transition-colors duration-300'
                           style={{ color: 'var(--labs-text-primary)' }}
                        >
                           fax machines
                        </span>
                     </div>
                  </div>
                  <div
                     className='labs-reveal group p-10 labs-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)] cursor-default border-t border-transparent hover:border-[var(--labs-text-meta)]'
                     style={{ transitionDelay: '200ms' }}
                  >
                     <div
                        className='labs-heading mb-4 transition-colors duration-300 group-hover:text-[var(--labs-text-primary)]'
                        style={{ fontSize: 'var(--labs-size-heading-sm)' }}
                     >
                        Builders
                     </div>
                     <div
                        className='labs-body leading-relaxed transition-colors duration-300 group-hover:text-[var(--labs-text-body)]'
                        style={{ fontSize: '12px' }}
                     >
                        make another{' '}
                        <span
                           className='transition-colors duration-300'
                           style={{ color: 'var(--labs-text-primary)' }}
                        >
                           AI notetaker
                        </span>
                     </div>
                  </div>
               </div>

               {/* Disconnect */}
               <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-20'>
                  <div
                     className='labs-reveal group p-10 labs-card border-t-2 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(45,212,191,0.12)] cursor-default'
                     style={{ borderTopColor: 'var(--labs-accent)' }}
                  >
                     <div
                        className='absolute right-0 top-0 font-display font-black text-[120px] leading-none opacity-[0.02] pointer-events-none select-none transition-all duration-500 group-hover:opacity-[0.04]'
                        style={{ color: 'var(--labs-accent)' }}
                     >
                        ⚡
                     </div>
                     <div className='relative z-10'>
                        <div className='mb-6'>
                           <Label
                              className='transition-colors duration-300 group-hover:text-[var(--labs-accent)]'
                              style={{ color: 'var(--labs-accent)' }}
                           >
                              // Problem
                           </Label>
                        </div>
                        <div
                           className='labs-heading mb-4 transition-colors duration-300 group-hover:text-[var(--labs-text-primary)]'
                           style={{ fontSize: 'var(--labs-size-heading-sm)' }}
                        >
                           Healthcare organizations
                        </div>
                        <div
                           className='labs-body leading-relaxed transition-colors duration-300 group-hover:text-[var(--labs-text-primary)]'
                           style={{ fontSize: '12px' }}
                        >
                           Real problems. No bandwidth to solve them.
                        </div>
                     </div>
                  </div>

                  <div
                     className='labs-reveal group p-10 labs-card border-t-2 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(45,212,191,0.12)] cursor-default'
                     style={{
                        borderTopColor: 'var(--labs-accent)',
                        transitionDelay: '100ms',
                     }}
                  >
                     <div
                        className='absolute right-0 top-0 font-display font-black text-[120px] leading-none opacity-[0.02] pointer-events-none select-none transition-all duration-500 group-hover:opacity-[0.04]'
                        style={{ color: 'var(--labs-accent)' }}
                     >
                        ⚡
                     </div>
                     <div className='relative z-10'>
                        <div className='mb-6'>
                           <Label
                              className='transition-colors duration-300 group-hover:text-[var(--labs-accent)]'
                              style={{ color: 'var(--labs-accent)' }}
                           >
                              // Opportunity
                           </Label>
                        </div>
                        <div
                           className='labs-heading mb-4 transition-colors duration-300 group-hover:text-[var(--labs-text-primary)]'
                           style={{ fontSize: 'var(--labs-size-heading-sm)' }}
                        >
                           Ambitious builders
                        </div>
                        <div
                           className='labs-body leading-relaxed transition-colors duration-300 group-hover:text-[var(--labs-text-primary)]'
                           style={{ fontSize: '12px' }}
                        >
                           Real skills. No problem worth solving.
                        </div>
                     </div>
                  </div>
               </div>

               {/* Conclusion */}
               <div className='text-center'>
                  <div
                     className='labs-heading mb-4'
                     style={{ fontSize: 'var(--labs-size-heading-md)' }}
                  >
                     The problem isn't the technology.
                     <br />
                     It's the disconnect.
                  </div>
                  <Label>
                     // Builders and problems are never in the same room.
                  </Label>
               </div>
            </div>
         </div>
      </section>
   );
}

// How It Works Section (combines Manifesto, About, and Program)
function HowItWorksSection() {
   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

   const timelineItems = [
      {
         week: 'Week 01',
         tag: 'Kickoff',
         title: 'Onboarding day',
         desc: "Meet your clinical partners. Understand the challenge firsthand. From day one, you're a founder — not a participant.",
      },
      {
         week: 'Week 02',
         tag: 'Experts',
         title: 'Expert session',
         desc: "Founders, clinicians, and healthcare operators who've built in this space. Ask them anything.",
      },
      {
         week: 'Week 04',
         tag: 'Milestone',
         title: 'Midterm pitch',
         desc: 'Present your progress to clinical partners. Pivot or persevere based on real feedback. No grades. Real consequences.',
      },
      {
         week: 'Week 06',
         tag: 'Experts',
         title: 'Expert session',
         desc: 'Deep dive with industry experts. Get tactical advice on your biggest challenges.',
      },
      {
         week: 'Week 08',
         tag: 'Final',
         title: 'Demo day',
         desc: 'Present your MVP to partners, clinicians, and a live audience. Real stakes. No safety net.',
         isLast: true,
      },
   ];

   return (
      <section
         id='manifesto'
         className='labs-reveal relative py-32 border-y overflow-hidden'
         style={{
            background: 'var(--labs-bg)',
            borderColor: 'var(--labs-border)',
         }}
      >
         {/* Animated background gradient blobs */}
         <div className='absolute inset-0 opacity-30 pointer-events-none'>
            <div
               className='absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] animate-blob'
               style={{
                  background:
                     'radial-gradient(circle, rgba(45,212,191,0.08) 0%, transparent 70%)',
               }}
            ></div>
            <div
               className='absolute top-1/2 right-1/4 w-96 h-96 rounded-full blur-[120px] animate-blob animation-delay-2000'
               style={{
                  background:
                     'radial-gradient(circle, rgba(45,212,191,0.06) 0%, transparent 70%)',
               }}
            ></div>
         </div>

         {/* Decorative side accent - large section number */}
         <div className='hidden lg:block absolute left-6 top-32 opacity-[0.03] pointer-events-none select-none'>
            <div
               className='font-display font-black text-[240px] leading-none'
               style={{ color: 'var(--labs-accent)' }}
            >
               02
            </div>
         </div>

         <div className='max-w-[1400px] mx-auto px-6 md:px-12 relative z-10'>
            <div className='max-w-5xl mx-auto'>
               {/* Section Header */}
               <SectionHeader>// Section 02: How It Works</SectionHeader>

               {/* Main Heading */}
               <h2 className='labs-heading text-[clamp(32px,5vw,56px)] leading-[1.1] mb-20'>
                  <span className='block'>8 weeks.</span>
                  <span
                     className='block'
                     style={{ color: 'var(--labs-text-body)' }}
                  >
                     Real problems. Real startup.
                  </span>
               </h2>

               {/* Manifesto Lines - Enhanced hover with stagger */}
               <div className='mb-20 space-y-6'>
                  <div
                     className='labs-reveal labs-manifesto-line group cursor-default'
                     style={{ transitionDelay: '0ms' }}
                  >
                     <p
                        className='labs-body leading-relaxed transition-colors duration-300 group-hover:text-[var(--labs-text-primary)]'
                        style={{ fontSize: '12px' }}
                     >
                        We put ambitious builders in the same room as clinical
                        challenges that actually matter. When a clinician
                        depends on what you build, you stop theorizing and start
                        shipping.
                     </p>
                  </div>

                  <div
                     className='labs-reveal labs-manifesto-line group cursor-default'
                     style={{ transitionDelay: '100ms' }}
                  >
                     <p
                        className='labs-body leading-relaxed transition-colors duration-300 group-hover:text-[var(--labs-text-primary)]'
                        style={{ fontSize: '12px' }}
                     >
                        This isn't a pitch competition. It's not an accelerator.
                        It's not a hackathon. You're building a company — and
                        you're selling to real customers from day one.
                     </p>
                  </div>

                  <div
                     className='labs-reveal labs-manifesto-line group cursor-default'
                     style={{ transitionDelay: '200ms' }}
                  >
                     <p
                        className='labs-body leading-relaxed transition-colors duration-300 group-hover:text-[var(--labs-text-primary)]'
                        style={{ fontSize: '12px' }}
                     >
                        No hand-holding. No certificates. No "learning
                        outcomes." Just real clinical partners with real
                        budgets, waiting to see if you can solve their problems
                        before someone else does.
                     </p>
                  </div>

                  <div
                     className='labs-reveal labs-manifesto-line group cursor-default'
                     style={{ transitionDelay: '300ms' }}
                  >
                     <p
                        className='labs-body leading-relaxed transition-colors duration-300 group-hover:text-[var(--labs-text-primary)]'
                        style={{ fontSize: '12px' }}
                     >
                        At the end of 8 weeks, you either have a startup with
                        paying customers, or you don't. That's the only metric
                        that matters.
                     </p>
                  </div>
               </div>

               {/* Core Specs - With watermark numbers and enhanced hover */}
               <div className='mb-6 labs-reveal'>
                  <Label>// Core Specs</Label>
               </div>
               <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-20'>
                  <div
                     className='labs-reveal group p-10 labs-card border-t-2 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(45,212,191,0.12)] cursor-default'
                     style={{
                        borderTopColor: 'var(--labs-accent)',
                        transitionDelay: '0ms',
                     }}
                  >
                     <div
                        className='absolute left-0 top-0 font-display font-black text-[120px] leading-none opacity-[0.04] pointer-events-none select-none transition-all duration-500 group-hover:opacity-[0.08] group-hover:scale-110'
                        style={{ color: 'var(--labs-accent)' }}
                     >
                        01
                     </div>
                     <div className='relative z-10'>
                        <div
                           className='labs-heading mb-4 transition-colors duration-300 group-hover:text-[var(--labs-accent)]'
                           style={{ fontSize: 'var(--labs-size-heading-sm)' }}
                        >
                           8 Weeks
                        </div>
                        <div
                           className='labs-body leading-relaxed transition-colors duration-300 group-hover:text-[var(--labs-text-primary)]'
                           style={{ fontSize: '12px' }}
                        >
                           Not 6 months. Not a semester. 8 intense weeks to
                           build, test, iterate, and sell. If you can't ship
                           something meaningful in 8 weeks, you won't ship it in
                           8 months.
                        </div>
                     </div>
                  </div>

                  <div
                     className='labs-reveal group p-10 labs-card border-t-2 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(45,212,191,0.12)] cursor-default'
                     style={{
                        borderTopColor: 'var(--labs-accent)',
                        transitionDelay: '100ms',
                     }}
                  >
                     <div
                        className='absolute left-0 top-0 font-display font-black text-[120px] leading-none opacity-[0.04] pointer-events-none select-none transition-all duration-500 group-hover:opacity-[0.08] group-hover:scale-110'
                        style={{ color: 'var(--labs-accent)' }}
                     >
                        02
                     </div>
                     <div className='relative z-10'>
                        <div
                           className='labs-heading mb-4 transition-colors duration-300 group-hover:text-[var(--labs-accent)]'
                           style={{ fontSize: 'var(--labs-size-heading-sm)' }}
                        >
                           Student-Run
                        </div>
                        <div
                           className='labs-body leading-relaxed transition-colors duration-300 group-hover:text-[var(--labs-text-primary)]'
                           style={{ fontSize: '12px' }}
                        >
                           Built by students, for students. No corporate
                           sponsors dictating direction. No professors grading
                           deliverables. Just founders helping founders build
                           real companies.
                        </div>
                     </div>
                  </div>

                  <div
                     className='labs-reveal group p-10 labs-card border-t-2 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(45,212,191,0.12)] cursor-default'
                     style={{
                        borderTopColor: 'var(--labs-accent)',
                        transitionDelay: '200ms',
                     }}
                  >
                     <div
                        className='absolute left-0 top-0 font-display font-black text-[120px] leading-none opacity-[0.04] pointer-events-none select-none transition-all duration-500 group-hover:opacity-[0.08] group-hover:scale-110'
                        style={{ color: 'var(--labs-accent)' }}
                     >
                        03
                     </div>
                     <div className='relative z-10'>
                        <div
                           className='labs-heading mb-4 transition-colors duration-300 group-hover:text-[var(--labs-accent)]'
                           style={{ fontSize: 'var(--labs-size-heading-sm)' }}
                        >
                           Real Problems
                        </div>
                        <div
                           className='labs-body leading-relaxed transition-colors duration-300 group-hover:text-[var(--labs-text-primary)]'
                           style={{ fontSize: '12px' }}
                        >
                           Sourced directly from hospitals, clinics, and
                           healthcare organizations. Not "wouldn't it be cool
                           if" ideas. Actual operational problems with real
                           budgets behind them.
                        </div>
                     </div>
                  </div>

                  <div
                     className='labs-reveal group p-10 labs-card border-t-2 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(45,212,191,0.12)] cursor-default'
                     style={{
                        borderTopColor: 'var(--labs-accent)',
                        transitionDelay: '300ms',
                     }}
                  >
                     <div
                        className='absolute left-0 top-0 font-display font-black text-[120px] leading-none opacity-[0.04] pointer-events-none select-none transition-all duration-500 group-hover:opacity-[0.08] group-hover:scale-110'
                        style={{ color: 'var(--labs-accent)' }}
                     >
                        04
                     </div>
                     <div className='relative z-10'>
                        <div
                           className='labs-heading mb-4 transition-colors duration-300 group-hover:text-[var(--labs-accent)]'
                           style={{ fontSize: 'var(--labs-size-heading-sm)' }}
                        >
                           Your Startup
                        </div>
                        <div
                           className='labs-body leading-relaxed transition-colors duration-300 group-hover:text-[var(--labs-text-primary)]'
                           style={{ fontSize: '12px' }}
                        >
                           You build it. You own it. 100% of the equity. We're
                           not taking a cut. We're not "partnering." This is
                           your company.
                        </div>
                     </div>
                  </div>
               </div>

               {/* Timeline - Alternating Design */}
               <div className='mb-12 labs-reveal'>
                  <Label>// Program Timeline</Label>
               </div>
               <div className='relative'>
                  {/* Center line */}
                  <div
                     className='hidden md:block absolute left-1/2 top-0 bottom-0 w-px -ml-px'
                     style={{ background: 'var(--labs-border)' }}
                  ></div>

                  {/* Mobile line */}
                  <div
                     className='md:hidden absolute left-6 top-0 bottom-0 w-px'
                     style={{ background: 'var(--labs-border)' }}
                  ></div>

                  {timelineItems.map((item, index) => {
                     const isLeft = index % 2 === 0;
                     return (
                        <div
                           key={index}
                           className={`labs-reveal group relative pb-24 ${item.isLast ? 'pb-0' : ''}`}
                           style={{ transitionDelay: `${index * 80}ms` }}
                           onMouseEnter={() => setHoveredIndex(index)}
                           onMouseLeave={() => setHoveredIndex(null)}
                        >
                           {/* Desktop Layout */}
                           <div className='hidden md:block'>
                              <div className='grid grid-cols-2 gap-12 items-start relative'>
                                 {/* Left side content (for even indices) */}
                                 {isLeft && (
                                    <div className='text-right pr-8'>
                                       <div
                                          className='p-8 labs-card group-hover:border-[var(--labs-accent)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_8px_30px_rgba(45,212,191,0.12)] border-l-2'
                                          style={{
                                             borderLeftColor:
                                                hoveredIndex === index
                                                   ? 'var(--labs-accent)'
                                                   : 'transparent',
                                          }}
                                       >
                                          <div className='mb-3'>
                                             <Label className='transition-colors duration-300 group-hover:text-[var(--labs-accent)]'>
                                                {item.week} · {item.tag}
                                             </Label>
                                          </div>
                                          <h3
                                             className='labs-heading mb-3 transition-colors duration-300 group-hover:text-[var(--labs-accent)]'
                                             style={{
                                                fontSize:
                                                   'var(--labs-size-heading-sm)',
                                             }}
                                          >
                                             {item.title}
                                          </h3>
                                          <p
                                             className='labs-body leading-relaxed transition-colors duration-300 group-hover:text-[var(--labs-text-primary)]'
                                             style={{ fontSize: '12px' }}
                                          >
                                             {item.desc}
                                          </p>
                                       </div>
                                    </div>
                                 )}

                                 {/* Empty space when content is on opposite side */}
                                 {!isLeft && <div></div>}

                                 {/* Right side content (for odd indices) */}
                                 {!isLeft && (
                                    <div className='text-left pl-8'>
                                       <div
                                          className='p-8 labs-card group-hover:border-[var(--labs-accent)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_8px_30px_rgba(45,212,191,0.12)] border-l-2'
                                          style={{
                                             borderLeftColor:
                                                hoveredIndex === index
                                                   ? 'var(--labs-accent)'
                                                   : 'transparent',
                                          }}
                                       >
                                          <div className='mb-3'>
                                             <Label className='transition-colors duration-300 group-hover:text-[var(--labs-accent)]'>
                                                {item.week} · {item.tag}
                                             </Label>
                                          </div>
                                          <h3
                                             className='labs-heading mb-3 transition-colors duration-300 group-hover:text-[var(--labs-accent)]'
                                             style={{
                                                fontSize:
                                                   'var(--labs-size-heading-sm)',
                                             }}
                                          >
                                             {item.title}
                                          </h3>
                                          <p
                                             className='labs-body leading-relaxed transition-colors duration-300 group-hover:text-[var(--labs-text-primary)]'
                                             style={{ fontSize: '12px' }}
                                          >
                                             {item.desc}
                                          </p>
                                       </div>
                                    </div>
                                 )}

                                 {/* Center dot */}
                                 <div className='absolute left-1/2 top-0 w-3 h-3 -ml-[6px]'>
                                    <div
                                       className='absolute inset-0 rounded-full border-2 transition-all duration-300 group-hover:scale-150 group-hover:border-[var(--labs-accent)] group-hover:bg-[var(--labs-accent)]'
                                       style={{
                                          borderColor: 'var(--labs-text-meta)',
                                          background: 'var(--labs-bg)',
                                       }}
                                    ></div>
                                    <div
                                       className='absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping'
                                       style={{
                                          background: 'var(--labs-accent)',
                                       }}
                                    ></div>
                                 </div>
                              </div>
                           </div>

                           {/* Mobile Layout */}
                           <div className='md:hidden pl-16'>
                              <div
                                 className='p-6 labs-card group-hover:border-[var(--labs-accent)] transition-all duration-300 border-l-2'
                                 style={{
                                    borderLeftColor:
                                       hoveredIndex === index
                                          ? 'var(--labs-accent)'
                                          : 'transparent',
                                 }}
                              >
                                 <div className='mb-2'>
                                    <Label className='transition-colors duration-300 group-hover:text-[var(--labs-accent)]'>
                                       {item.week} · {item.tag}
                                    </Label>
                                 </div>
                                 <h3
                                    className='labs-heading mb-2 transition-colors duration-300 group-hover:text-[var(--labs-accent)]'
                                    style={{
                                       fontSize: 'var(--labs-size-heading-sm)',
                                    }}
                                 >
                                    {item.title}
                                 </h3>
                                 <p
                                    className='labs-body leading-relaxed transition-colors duration-300 group-hover:text-[var(--labs-text-primary)]'
                                    style={{ fontSize: '12px' }}
                                 >
                                    {item.desc}
                                 </p>
                              </div>

                              {/* Mobile dot */}
                              <div className='absolute left-6 top-0 w-3 h-3 -ml-[6px]'>
                                 <div
                                    className='absolute inset-0 rounded-full border-2 transition-all duration-300 group-hover:scale-150 group-hover:border-[var(--labs-accent)] group-hover:bg-[var(--labs-accent)]'
                                    style={{
                                       borderColor: 'var(--labs-text-meta)',
                                       background: 'var(--labs-bg)',
                                    }}
                                 ></div>
                              </div>
                           </div>
                        </div>
                     );
                  })}
               </div>
            </div>
         </div>
      </section>
   );
}

// Proof Callout Section - Visual break with stats
function ProofCalloutSection() {
   return (
      <section className='labs-reveal relative py-20 border-y overflow-hidden' style={{ background: 'var(--labs-bg)', borderColor: 'var(--labs-border)' }}>
         <div className='max-w-[1400px] mx-auto px-6 md:px-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
               {/* Left: Image */}
               <div className='labs-reveal relative aspect-[16/10] overflow-hidden border group' style={{ borderColor: 'var(--labs-border)' }}>
                  <img src='/labs/images/award.png' alt='Bavarian Best Practice Award' className='w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700' />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent'></div>
                  <div className='absolute bottom-6 left-6 right-6'>
                     <div className='mb-2'>
                        <Label style={{ color: 'var(--labs-accent)' }}>// GovTech Edition 2025</Label>
                     </div>
                     <h3 className='labs-heading' style={{ fontSize: 'var(--labs-size-heading-sm)', color: 'var(--labs-text-primary)' }}>
                        Bavarian Best Practice Award Winner
                     </h3>
                  </div>
               </div>

               {/* Right: Stats */}
               <div className='space-y-8'>
                  <div>
                     <div className='mb-3'>
                        <Label>// Proof of Concept</Label>
                     </div>
                     <h3 className='labs-heading mb-4' style={{ fontSize: 'var(--labs-size-heading-md)' }}>
                        We've done this before.
                     </h3>
                     <p className='labs-body leading-relaxed' style={{ fontSize: '12px' }}>
                        GovTech Edition 2025 produced <span style={{ color: 'var(--labs-accent)' }}>3 working startups</span> in 8 weeks. Real problems from municipalities. Real solutions that shipped.
                     </p>
                  </div>

                  <div className='grid grid-cols-3 gap-6'>
                     <div className='labs-reveal group p-6 text-center labs-card transition-all duration-300 hover:-translate-y-1' style={{ transitionDelay: '0ms' }}>
                        <div className='labs-heading text-5xl mb-2 transition-colors duration-300 group-hover:text-[var(--labs-accent)]'>3</div>
                        <div className='labs-meta'>Startups</div>
                     </div>
                     <div className='labs-reveal group p-6 text-center labs-card transition-all duration-300 hover:-translate-y-1' style={{ transitionDelay: '100ms' }}>
                        <div className='labs-heading text-5xl mb-2 transition-colors duration-300 group-hover:text-[var(--labs-accent)]'>8</div>
                        <div className='labs-meta'>Weeks</div>
                     </div>
                     <div className='labs-reveal group p-6 text-center labs-card transition-all duration-300 hover:-translate-y-1' style={{ transitionDelay: '200ms' }}>
                        <div className='labs-heading text-5xl mb-2 transition-colors duration-300 group-hover:text-[var(--labs-accent)]'>1</div>
                        <div className='labs-meta'>Award</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

// Criteria Section
function CriteriaSection() {
   return (
      <section
         className='labs-reveal relative py-32 overflow-hidden'
         style={{ background: 'var(--labs-bg)' }}
      >
         {/* Background decorative images */}
         <div className='absolute inset-0 opacity-[0.04] pointer-events-none'>
            <div className='absolute left-0 top-1/4 w-[400px] h-[300px]'>
               <img src='/labs/images/demoday.jpg' alt='' className='w-full h-full object-cover mix-blend-screen' />
            </div>
         </div>

         <div className='max-w-[1400px] mx-auto px-6 md:px-12 relative z-10'>
            <div className='max-w-5xl mx-auto'>
               {/* Section Header */}
               <SectionHeader>// Section 03: Candidate Profile</SectionHeader>

               <div className='mb-20'>
                  <h2
                     className='labs-heading mb-6'
                     style={{ fontSize: 'var(--labs-size-heading-lg)' }}
                  >
                     Are you the one?
                  </h2>
                  <div>
                     <Label>
                        // No MedTech experience needed. No connections
                        required. Just the right mindset.
                     </Label>
                  </div>
               </div>

               {/* Criteria Grid */}
               <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
                  {/* Apply If */}
                  <div
                     className='labs-reveal group p-10 labs-card border-t-2 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(45,212,191,0.12)] cursor-default'
                     style={{ borderTopColor: 'var(--labs-accent)' }}
                  >
                     <div
                        className='absolute left-0 top-0 font-display font-black text-[160px] leading-none opacity-[0.02] pointer-events-none select-none transition-all duration-500 group-hover:opacity-[0.04]'
                        style={{ color: 'var(--labs-accent)' }}
                     >
                        ✓
                     </div>
                     <div className='relative z-10'>
                        <div className='flex items-center gap-3 mb-8'>
                           <div
                              className='w-2 h-2 rounded-full transition-all duration-300 group-hover:scale-150'
                              style={{ background: 'var(--labs-accent)' }}
                           ></div>
                           <Label className='font-semibold transition-colors duration-300 group-hover:text-[var(--labs-accent)]'>
                              // Apply if
                           </Label>
                        </div>

                        <div className='space-y-6'>
                           <div className='flex gap-4 transition-all duration-300 hover:translate-x-1'>
                              <div
                                 className='w-1 h-1 mt-2 flex-shrink-0'
                                 style={{ background: 'var(--labs-accent)' }}
                              ></div>
                              <div>
                                 <div
                                    className='labs-body font-semibold mb-1 transition-colors duration-300'
                                    style={{
                                       color: 'var(--labs-text-primary)',
                                    }}
                                 >
                                    Hard problems energize you.
                                 </div>
                                 <div
                                    className='labs-body leading-relaxed'
                                    style={{ fontSize: '12px' }}
                                 >
                                    You don't quit when things get tough. You
                                    get obsessed.
                                 </div>
                              </div>
                           </div>

                           <div className='flex gap-4 transition-all duration-300 hover:translate-x-1'>
                              <div
                                 className='w-1 h-1 mt-2 flex-shrink-0'
                                 style={{ background: 'var(--labs-accent)' }}
                              ></div>
                              <div>
                                 <div
                                    className='labs-body font-semibold mb-1 transition-colors duration-300'
                                    style={{
                                       color: 'var(--labs-text-primary)',
                                    }}
                                 >
                                    The status quo makes you angry.
                                 </div>
                                 <div
                                    className='labs-body leading-relaxed'
                                    style={{ fontSize: '12px' }}
                                 >
                                    You see broken systems and think 'I can fix
                                    this'.
                                 </div>
                              </div>
                           </div>

                           <div className='flex gap-4 transition-all duration-300 hover:translate-x-1'>
                              <div
                                 className='w-1 h-1 mt-2 flex-shrink-0'
                                 style={{ background: 'var(--labs-accent)' }}
                              ></div>
                              <div>
                                 <div
                                    className='labs-body font-semibold mb-1 transition-colors duration-300'
                                    style={{
                                       color: 'var(--labs-text-primary)',
                                    }}
                                 >
                                    You have fire. Not just interest.
                                 </div>
                                 <div
                                    className='labs-body leading-relaxed'
                                    style={{ fontSize: '12px' }}
                                 >
                                    Genuine, can't-sleep-at-night passion for
                                    building things that matter.
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Don't Apply If */}
                  <div
                     className='labs-reveal group p-10 labs-card border-t-2 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-default'
                     style={{
                        borderTopColor: 'var(--labs-text-meta)',
                        transitionDelay: '100ms',
                     }}
                  >
                     <div
                        className='absolute left-0 top-0 font-display font-black text-[160px] leading-none opacity-[0.02] pointer-events-none select-none transition-all duration-500 group-hover:opacity-[0.04]'
                        style={{ color: 'var(--labs-text-meta)' }}
                     >
                        ✗
                     </div>
                     <div className='relative z-10'>
                        <div className='flex items-center gap-3 mb-8'>
                           <div
                              className='w-2 h-2 rounded-full transition-all duration-300 group-hover:scale-150'
                              style={{ background: 'var(--labs-text-meta)' }}
                           ></div>
                           <Label className='font-semibold transition-colors duration-300 group-hover:text-[var(--labs-text-primary)]'>
                              // Don't apply if
                           </Label>
                        </div>

                        <div className='space-y-6'>
                           <div className='flex gap-4 transition-all duration-300 hover:translate-x-1'>
                              <div
                                 className='w-1 h-1 mt-2 flex-shrink-0'
                                 style={{ background: 'var(--labs-text-meta)' }}
                              ></div>
                              <div>
                                 <div
                                    className='labs-body font-semibold mb-1 transition-colors duration-300'
                                    style={{
                                       color: 'var(--labs-text-primary)',
                                    }}
                                 >
                                    Your calendar is already drowning.
                                 </div>
                                 <div
                                    className='labs-body leading-relaxed'
                                    style={{ fontSize: '12px' }}
                                 >
                                    We need 10+ hours per week of real
                                    commitment.
                                 </div>
                              </div>
                           </div>

                           <div className='flex gap-4 transition-all duration-300 hover:translate-x-1'>
                              <div
                                 className='w-1 h-1 mt-2 flex-shrink-0'
                                 style={{ background: 'var(--labs-text-meta)' }}
                              ></div>
                              <div>
                                 <div
                                    className='labs-body font-semibold mb-1 transition-colors duration-300'
                                    style={{
                                       color: 'var(--labs-text-primary)',
                                    }}
                                 >
                                    You want a cozy lecture series.
                                 </div>
                                 <div
                                    className='labs-body leading-relaxed'
                                    style={{ fontSize: '12px' }}
                                 >
                                    This is hands-on, messy, and real.
                                 </div>
                              </div>
                           </div>

                           <div className='flex gap-4 transition-all duration-300 hover:translate-x-1'>
                              <div
                                 className='w-1 h-1 mt-2 flex-shrink-0'
                                 style={{ background: 'var(--labs-text-meta)' }}
                              ></div>
                              <div>
                                 <div
                                    className='labs-body font-semibold mb-1 transition-colors duration-300'
                                    style={{
                                       color: 'var(--labs-text-primary)',
                                    }}
                                 >
                                    You're collecting badges for your CV.
                                 </div>
                                 <div
                                    className='labs-body leading-relaxed'
                                    style={{ fontSize: '12px' }}
                                 >
                                    Build something you actually care about, or
                                    don't apply.
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Edge Cases + Visual */}
               <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div
                     className='labs-reveal group border-l-2 pl-8 labs-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--labs-accent)]'
                     style={{ borderColor: 'var(--labs-border)' }}
                  >
                     <div className='mb-4'>
                        <Label className='transition-colors duration-300 group-hover:text-[var(--labs-accent)]'>
                           // Edge Cases
                        </Label>
                     </div>
                     <div
                        className='labs-body leading-relaxed'
                        style={{ fontSize: '12px' }}
                     >
                        Don't fit these boxes?{' '}
                        <span
                           style={{ color: 'var(--labs-accent)' }}
                           className='font-semibold'
                        >
                           You might be exactly who we need.
                        </span>{' '}
                        <a
                           href='https://tally.so/r/n9Axzp'
                           target='_blank'
                           rel='noopener'
                           style={{ color: 'var(--labs-accent)' }}
                           className='font-semibold underline hover:opacity-70 transition-opacity'
                        >
                           Apply anyway.
                        </a>
                     </div>
                  </div>

                  {/* Visual proof image */}
                  <div className='labs-reveal group relative aspect-[16/10] overflow-hidden border' style={{ borderColor: 'var(--labs-border)', transitionDelay: '100ms' }}>
                     <img src='/labs/images/partner.jpg' alt='Past participants' className='w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500' />
                     <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
                     <div className='absolute bottom-4 left-4'>
                        <Label style={{ color: 'var(--labs-text-primary)' }}>// GovTech 2025</Label>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

// Proof Section
function ProofSection() {
   return (
      <section
         id='proof'
         className='labs-reveal py-32 border-y'
         style={{
            background: 'var(--labs-bg)',
            borderColor: 'var(--labs-border)',
         }}
      >
         <div className='max-w-[1400px] mx-auto px-6 md:px-12'>
            <div className='max-w-5xl mx-auto'>
               {/* Section Header */}
               <SectionHeader>// Section 04: Proof of Concept</SectionHeader>

               <div className='mb-20'>
                  <h2
                     className='labs-heading mb-4'
                     style={{ fontSize: 'var(--labs-size-heading-md)' }}
                  >
                     We successfully ran{' '}
                     <span style={{ color: 'var(--labs-text-body)' }}>
                        GovTech Edition
                     </span>{' '}
                     in 2025.
                  </h2>
               </div>

               {/* Stats Grid */}
               <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-20'>
                  <div className='p-12 text-center labs-card'>
                     <div className='labs-heading text-6xl mb-3'>3</div>
                     <div className='labs-meta'>Challenges</div>
                  </div>
                  <div className='p-12 text-center labs-card'>
                     <div className='labs-heading text-6xl mb-3'>3</div>
                     <div className='labs-meta'>Startups</div>
                  </div>
                  <div className='p-12 text-center labs-card'>
                     <div className='labs-heading text-6xl mb-3'>1</div>
                     <div className='labs-meta'>
                        Bavarian Best Practice Award
                     </div>
                  </div>
               </div>

               {/* Image Carousel */}
               <div className='mb-20'>
                  <div className='text-center mb-8'>
                     <Label>// Program Archive 2025</Label>
                  </div>

                  <div className='flex md:hidden items-center gap-2 px-6 mb-4 labs-meta'>
                     <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-3 h-3'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                     >
                        <path
                           strokeLinecap='round'
                           strokeLinejoin='round'
                           strokeWidth='2'
                           d='M9 5l7 7-7 7'
                        />
                     </svg>
                     <span>Swipe</span>
                  </div>

                  <div className='flex gap-6 overflow-x-auto pb-4 carousel-scroll'>
                     {[
                        'letter.JPG',
                        'demoday.jpg',
                        'award.png',
                        'winner.jpg',
                        'partner.jpg',
                     ].map((img, i) => (
                        <div
                           key={i}
                           className='flex-shrink-0 w-[400px] h-[250px] relative group overflow-hidden border'
                           style={{ borderColor: 'var(--labs-border)' }}
                        >
                           <img
                              src={`/labs/images/${img}`}
                              alt={`Archive ${i + 1}`}
                              className='w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500'
                           />
                           <div
                              className='absolute top-3 left-3 labs-meta px-2 py-1'
                              style={{ background: 'rgba(0,0,0,0.9)' }}
                           >
                              {String(i + 1).padStart(2, '0')}
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Project Grid */}
               <div>
                  <div className='mb-8'>
                     <Label>// Deliverables</Label>
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                     <div className='p-10 group labs-card transition-all duration-300'>
                        <div className='labs-meta mb-4'>
                           Landratsamt Traunstein
                        </div>
                        <div
                           className='labs-heading mb-3 group-hover:opacity-70 transition-opacity'
                           style={{ fontSize: 'var(--labs-size-heading-sm)' }}
                        >
                           DataNexus
                        </div>
                        <div className='labs-body leading-relaxed'>
                           GDPR-compliant platform.
                           <br />3 days saved per user yearly.
                        </div>
                     </div>

                     <div className='p-10 group labs-card transition-all duration-300'>
                        <div className='labs-meta mb-4'>BayKommun</div>
                        <div
                           className='labs-heading mb-3 group-hover:opacity-70 transition-opacity'
                           style={{ fontSize: 'var(--labs-size-heading-sm)' }}
                        >
                           DiviData
                        </div>
                        <div className='labs-body leading-relaxed'>
                           Built for a sector where
                           <br />
                           70% of digital projects fail.
                        </div>
                     </div>

                     <div className='p-10 group labs-card transition-all duration-300'>
                        <div className='labs-meta mb-4'>Stadt Landshut</div>
                        <div
                           className='labs-heading mb-3 group-hover:opacity-70 transition-opacity'
                           style={{ fontSize: 'var(--labs-size-heading-sm)' }}
                        >
                           FileFlow
                        </div>
                        <div className='labs-body leading-relaxed'>
                           Automated letter pipeline.
                           <br />
                           €160,000 annual savings.
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

// Apply Section
function ApplySection() {
   return (
      <section
         id='apply'
         className='labs-reveal relative py-32 overflow-hidden'
         style={{ background: 'var(--labs-bg)' }}
      >
         {/* Animated background gradient blobs */}
         <div className='absolute inset-0 opacity-20 pointer-events-none'>
            <div
               className='absolute top-1/2 left-1/4 w-96 h-96 rounded-full blur-[120px] animate-blob'
               style={{
                  background:
                     'radial-gradient(circle, rgba(45,212,191,0.15) 0%, transparent 70%)',
               }}
            ></div>
            <div
               className='absolute top-1/2 right-1/4 w-96 h-96 rounded-full blur-[120px] animate-blob animation-delay-2000'
               style={{
                  background:
                     'radial-gradient(circle, rgba(45,212,191,0.12) 0%, transparent 70%)',
               }}
            ></div>
         </div>

         {/* Rocket image - prominent but tasteful */}
         <div className='absolute inset-0 pointer-events-none'>
            <div className='absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.08]'>
               <img src='/labs/images/rocket.png' alt='' className='w-full h-full object-contain mix-blend-screen' />
            </div>
         </div>

         <div className='max-w-[1400px] mx-auto px-6 md:px-12 text-center relative z-10'>
            <div className='max-w-5xl mx-auto'>
               <h2 className='labs-heading text-[clamp(36px,6vw,64px)] leading-[0.95] mb-16'>
                  The only wrong move
                  <br />
                  is{' '}
                  <span style={{ color: 'var(--labs-accent)' }}>
                     not applying.
                  </span>
               </h2>

               <a
                  href='https://tally.so/r/n9Axzp'
                  target='_blank'
                  rel='noopener'
                  className='group relative inline-block labs-cta-button overflow-hidden'
                  style={{
                     borderColor: 'var(--labs-accent)',
                     color: 'var(--labs-accent)',
                  }}
               >
                  <span className='relative z-10 group-hover:text-black transition-colors duration-300'>
                     Apply Now
                  </span>
                  <div
                     className='absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out'
                     style={{ background: 'var(--labs-accent)' }}
                  ></div>
               </a>
            </div>
         </div>
      </section>
   );
}

// FAQ Section
function FAQSection() {
   const [openIndex, setOpenIndex] = useState<number | null>(null);

   const faqs = [
      {
         q: 'Do I need an idea to apply?',
         a: (
            <>
               <span style={{ color: 'var(--labs-accent)' }}>No.</span> The
               challenges come directly from hospitals, clinicians, researchers,
               and health-tech partners. We've already scoped the real problems.
               You bring the skills.
            </>
         ),
      },
      {
         q: 'Is this paid?',
         a: (
            <>
               Not in salary. But you'll work on{' '}
               <span style={{ color: 'var(--labs-accent)' }}>
                  real healthcare challenges
               </span>
               , build a working MVP, get hands-on mentorship, and gain
               visibility in the health innovation ecosystem. If you're serious,
               this can open real doors — including your{' '}
               <span style={{ color: 'var(--labs-accent)' }}>
                  first paying customer
               </span>
               .
            </>
         ),
      },
      {
         q: 'Do we have to give up equity?',
         a: (
            <>
               <span style={{ color: 'var(--labs-accent)' }}>No.</span> Your
               product, your pitch, your decision.{' '}
               <span style={{ color: 'var(--labs-accent)' }}>
                  Whoever builds, owns.
               </span>
            </>
         ),
      },
      {
         q: 'Do I need MedTech experience?',
         a: (
            <>
               <span style={{ color: 'var(--labs-accent)' }}>No.</span> We
               provide the domain access, the clinical partners, and the problem
               context. You just need the skills and the drive to solve hard
               problems.
            </>
         ),
      },
      {
         q: 'Do I have to speak German?',
         a: (
            <>
               It helps on the business and sales side. If you're focused on
               tech or design,{' '}
               <span style={{ color: 'var(--labs-accent)' }}>
                  English is fine
               </span>
               .
            </>
         ),
      },
      {
         q: 'Can I participate online?',
         a: (
            <>
               <span style={{ color: 'var(--labs-accent)' }}>No.</span> We go
               out and touch grass.{' '}
               <span style={{ color: 'var(--labs-accent)' }}>
                  In-person only, Munich.
               </span>
            </>
         ),
      },
      {
         q: 'Do I have to be a student?',
         a: (
            <>
               Nope. Recent graduates and young professionals are welcome. No
               hard cut-off. If you're at the start of your career and want to
               build something real,{' '}
               <span style={{ color: 'var(--labs-accent)' }}>
                  we want you in
               </span>
               .
            </>
         ),
      },
      {
         q: 'Can I do it next to studying?',
         a: (
            <>
               Yes — but be realistic. If you're taking 6+ courses and a working
               student job, it might be a stretch. The{' '}
               <span style={{ color: 'var(--labs-accent)' }}>
                  more time you put in, the more you get out
               </span>
               .
            </>
         ),
      },
      {
         q: 'Can I do it next to a working student job?',
         a: (
            <>
               It depends. Some manage both, especially if they can adjust hours
               or workload. Just be{' '}
               <span style={{ color: 'var(--labs-accent)' }}>
                  honest with yourself
               </span>{' '}
               about your capacity.
            </>
         ),
      },
   ];

   return (
      <section
         id='faq'
         className='labs-reveal py-32 border-y'
         style={{
            background: 'var(--labs-bg)',
            borderColor: 'var(--labs-border)',
         }}
      >
         <div className='max-w-[1400px] mx-auto px-6 md:px-12'>
            <div className='max-w-5xl mx-auto'>
               {/* Section Header */}
               <SectionHeader>// Section 04: Frequently Asked</SectionHeader>

               <h2
                  className='labs-heading mb-8'
                  style={{ fontSize: 'var(--labs-size-heading-md)' }}
               >
                  Got questions?
               </h2>

               {/* Featured image */}
               <div className='labs-reveal mb-16 relative aspect-[21/9] overflow-hidden border group' style={{ borderColor: 'var(--labs-border)' }}>
                  <img src='/labs/images/letter.JPG' alt='Program details' className='w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700' />
                  <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent'></div>
                  <div className='absolute left-8 top-1/2 -translate-y-1/2'>
                     <Label className='mb-2 block' style={{ color: 'var(--labs-accent)' }}>// Everything you need to know</Label>
                     <div className='labs-heading' style={{ fontSize: 'var(--labs-size-heading-sm)', color: 'var(--labs-text-primary)' }}>Common questions answered</div>
                  </div>
               </div>

               <div className='space-y-2'>
                  {faqs.map((faq, i) => (
                     <div
                        key={i}
                        className='labs-reveal group labs-faq-item labs-card border-l-2 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(45,212,191,0.08)]'
                        style={{
                           borderLeftColor:
                              openIndex === i
                                 ? 'var(--labs-accent)'
                                 : 'transparent',
                           transitionDelay: `${i * 50}ms`,
                        }}
                     >
                        <button
                           onClick={() =>
                              setOpenIndex(openIndex === i ? null : i)
                           }
                           className='w-full text-left p-6 flex justify-between items-start gap-4 group/button'
                        >
                           <div className='flex items-start gap-4 flex-1'>
                              <span
                                 className='labs-meta mt-1 transition-colors duration-300'
                                 style={{
                                    color:
                                       openIndex === i
                                          ? 'var(--labs-accent)'
                                          : 'var(--labs-text-meta)',
                                 }}
                              >
                                 {String(i + 1).padStart(2, '0')}
                              </span>
                              <span
                                 className='labs-body font-semibold transition-all duration-300 group-hover/button:translate-x-1'
                                 style={{
                                    fontSize: '12px',
                                    color:
                                       openIndex === i
                                          ? 'var(--labs-text-primary)'
                                          : 'var(--labs-text-body)',
                                 }}
                              >
                                 {faq.q}
                              </span>
                           </div>
                           <div
                              className={`w-5 h-5 border flex items-center justify-center transition-all duration-300 group-hover/button:border-[var(--labs-accent)] ${openIndex === i ? 'rotate-45 border-[var(--labs-accent)]' : ''}`}
                              style={{
                                 borderColor:
                                    openIndex === i
                                       ? 'var(--labs-accent)'
                                       : 'var(--labs-border)',
                              }}
                           >
                              <div
                                 className='w-2 h-px transition-colors duration-300'
                                 style={{
                                    background:
                                       openIndex === i
                                          ? 'var(--labs-accent)'
                                          : 'var(--labs-text-body)',
                                 }}
                              ></div>
                              <div
                                 className='w-px h-2 absolute transition-colors duration-300'
                                 style={{
                                    background:
                                       openIndex === i
                                          ? 'var(--labs-accent)'
                                          : 'var(--labs-text-body)',
                                 }}
                              ></div>
                           </div>
                        </button>
                        <div
                           className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-96 pb-6' : 'max-h-0'}`}
                        >
                           <div className='px-6 pl-[52px]'>
                              <p
                                 className='labs-body leading-relaxed'
                                 style={{ fontSize: '12px' }}
                              >
                                 {faq.a}
                              </p>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}

// Footer
function LabsFooter() {
   return (
      <footer
         className='py-16 relative overflow-hidden'
         style={{
            background: 'var(--labs-bg)',
         }}
      >
         <div className='max-w-[1400px] mx-auto px-6 md:px-12 text-center relative z-10'>
            <Label>// START Labs © 2026 · MedTech Edition</Label>
         </div>
      </footer>
   );
}

// Main Component
export default function LabsContent() {
   useEffect(() => {
      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  entry.target.classList.add('active');
               }
            });
         },
         { threshold: 0.15 },
      );

      document.querySelectorAll('.labs-reveal').forEach((el) => {
         observer.observe(el);
      });

      document.querySelectorAll('.carousel-scroll').forEach((el) => {
         (el as HTMLElement).scrollLeft = 0;
      });

      return () => observer.disconnect();
   }, []);

   return (
      <>
         <Script id='iframe-height-sender' strategy='afterInteractive'>
            {`
          function sendHeight() {
            if (window.parent !== window) {
              const height = document.documentElement.scrollHeight;
              window.parent.postMessage({ type: 'iframe-height', height: height }, '*');
            }
          }
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', sendHeight);
          } else {
            sendHeight();
          }
          window.addEventListener('resize', sendHeight);
        `}
         </Script>

         <main
            className='min-h-screen overflow-x-hidden labs-page'
            style={{ background: 'var(--labs-bg)' }}
         >
            <LabsNavigation />
            <HeroSection />
            <OrganizedBySection />
            <ProblemSection />
            <HowItWorksSection />
            <ProofCalloutSection />
            <CriteriaSection />
            {/* <ProofSection /> */}
            <ApplySection />
            <FAQSection />
            <LabsFooter />
         </main>
      </>
   );
}
