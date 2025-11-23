"use client"

import { useState, useEffect, useRef } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Script from "next/script"

export const dynamic = 'force-dynamic'

interface Member {
  id: number
  name: string
  batch: string
  role: string
  study?: string
  company?: string
  linkedinUrl?: string
  imageUrl: string
  bio?: string
  expertise?: string[]
  achievements?: string
}

interface Batch {
  name: string
  semester: string
  year: string
  groupImageUrl: string
  memberCount: number
}

// Fetch members from API
async function fetchMembers(): Promise<Member[]> {
  try {
    const response = await fetch('/api/members');
    if (!response.ok) throw new Error('Failed to fetch members');
    return await response.json();
  } catch (error) {
    console.error('Error fetching members:', error);
    return [];
  }
}

export default function MembersPage() {
  const [members, setMembers] = useState<Member[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedBatch, setSelectedBatch] = useState<string>("all")
  const [selectedStudy, setSelectedStudy] = useState<string>("all")
  const [expandedBatch, setExpandedBatch] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12
  
  // Animation states for numbers
  const [animatedMembers, setAnimatedMembers] = useState(0)
  const [animatedBatches, setAnimatedBatches] = useState(0)
  const [animatedCompanies, setAnimatedCompanies] = useState(0)
  const hasAnimatedRef = useRef(false)
  const membersGridRef = useRef<HTMLDivElement>(null)

  // Load members on mount
  useEffect(() => {
    const loadMembers = async () => {
      setLoading(true)
      const data = await fetchMembers()
      setMembers(data)
      setLoading(false)
    }
    loadMembers()
  }, [])

  // Extract unique batches
  const allBatches = Array.from(
    new Set(members.map(member => member.batch))
  ).filter(batch => batch).sort().reverse()

  // Extract unique study subjects
  const allStudies = Array.from(
    new Set(members.map(member => member.study).filter((study): study is string => !!study))
  ).sort()

  // Group members by batch for batch cards
  const batchGroups = allBatches.map(batchName => {
    const batchMembers = members.filter(m => m.batch === batchName)
    return {
      name: batchName,
      semester: batchName.split(' ')[0] || 'Batch',
      year: batchName.split(' ')[1] || '',
      groupImageUrl: '/batch.jpeg',
      memberCount: batchMembers.length
    }
  })

  // Sort batches by year (newest first), then by semester
  const sortedBatches = batchGroups.sort((a, b) => {
    const yearDiff = parseInt(b.year) - parseInt(a.year)
    if (yearDiff !== 0) return yearDiff
    // If same year, Winter comes before Summer
    if (a.semester.toLowerCase().includes('winter') || a.semester.toLowerCase().startsWith('w')) return -1
    if (b.semester.toLowerCase().includes('winter') || b.semester.toLowerCase().startsWith('w')) return 1
    return 0
  })

  // Filter members based on selected filters
  const filteredMembers = members.filter(member => {
    const matchesBatch = selectedBatch === "all" || member.batch === selectedBatch
    const matchesStudy = selectedStudy === "all" || member.study === selectedStudy
    return matchesBatch && matchesStudy
  })

  // Pagination calculations
  const totalPages = Math.ceil(filteredMembers.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedMembers = filteredMembers.slice(startIndex, endIndex)

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedBatch, selectedStudy])

  // Calculate total statistics
  const totalMembers = members.length
  const totalBatches = allBatches.length
  const totalCompanies = new Set(members.filter(m => m.company).map(m => m.company)).size

  // Animate numbers on component mount
  useEffect(() => {
    if (!loading && !hasAnimatedRef.current && totalMembers > 0) {
      hasAnimatedRef.current = true
      
      let membersCurrent = 0
      let batchesCurrent = 0
      let companiesCurrent = 0
      
      const duration = 1500
      const steps = 60
      const interval = duration / steps
      
      const membersIncrement = totalMembers / steps
      const batchesIncrement = totalBatches / steps
      const companiesIncrement = totalCompanies / steps
      
      let step = 0
      
      const timer = setInterval(() => {
        step++
        
        membersCurrent += membersIncrement
        batchesCurrent += batchesIncrement
        companiesCurrent += companiesIncrement
        
        if (step >= steps) {
          setAnimatedMembers(totalMembers)
          setAnimatedBatches(totalBatches)
          setAnimatedCompanies(totalCompanies)
          clearInterval(timer)
        } else {
          setAnimatedMembers(membersCurrent)
          setAnimatedBatches(batchesCurrent)
          setAnimatedCompanies(companiesCurrent)
        }
      }, interval)

      return () => clearInterval(timer)
    }
  }, [loading, totalMembers, totalBatches, totalCompanies])

  if (loading) {
    return (
      <main className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-2xl font-bold text-[#00002c]">Loading members...</p>
        </div>
      </main>
    )
  }

  return (
    <>
      <Script id="iframe-height-sender" strategy="afterInteractive">
        {`
          function sendHeight() {
            const h = Math.max(
              document.documentElement.scrollHeight,
              document.body.scrollHeight
            );
            parent.postMessage({ type: "EMBED_HEIGHT", height: h }, "*");
          }

          window.addEventListener("load", sendHeight);
          const ro = new ResizeObserver(sendHeight);
          ro.observe(document.documentElement);
          document.addEventListener("DOMContentLoaded", sendHeight);
        `}
      </Script>
      
      <main className="min-h-screen bg-[#00002c]">
        {/* Hero Section with Full-Width Image */}
        <div className="relative w-full overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/member-background.png"
              alt="START Munich Community"
              className="w-full h-full object-cover"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-[#00002c]/60"></div>
          </div>

          {/* Content Overlay */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex items-center justify-between gap-12">
              {/* Left Side - Heading */}
              <div className="flex-1 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#d0006f]/20 border border-[#d0006f]/40 rounded-full mb-6 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-[#d0006f] rounded-full animate-pulse"></div>
                  <p className="text-[#d0006f] font-semibold text-xs tracking-widest uppercase">OUR COMMUNITY</p>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-white mb-6 h1-big">
                  <span className="no-stroke bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent">
                    THE MINDS
                  </span>
                  <br />
                  <span className="outline-text">
                    BEHIND THE
                  </span>
                  <br />
                  <span className="no-stroke bg-gradient-to-r from-[#d0006f] via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    MAGIC
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Meet the ambitious student entrepreneurs building the future of technology and innovation
                </p>
              </div>

              {/* Right Side - Statistics */}
              <div className="hidden lg:flex flex-col gap-6 min-w-[280px] mt-11 mb-11 ml-auto mr-20">
                {/* Stat 1 - Total Members */}
                <div className="group relative backdrop-blur-lg bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl border border-white/20 hover:border-[#d0006f]/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#d0006f]/20 w-full">
                  <div className="absolute top-3 right-3 w-12 h-12 bg-[#d0006f]/20 rounded-full blur-xl group-hover:bg-[#d0006f]/30 transition-all"></div>
                  <div className="relative text-center">
                    <div className="flex items-baseline justify-center gap-2 mb-3">
                      <span className="text-6xl font-black bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent group-hover:from-white group-hover:to-[#d0006f] transition-all duration-300">
                        {Math.floor(animatedMembers)}
                      </span>
                      <span className="text-3xl font-bold text-[#d0006f] animate-pulse">+</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-8 h-0.5 bg-gradient-to-r from-[#d0006f] to-transparent"></div>
                      <p className="text-xs font-bold text-gray-300 uppercase tracking-widest">Members</p>
                    </div>
                  </div>
                </div>

                {/* Stat 2 - Total Batches */}
                <div className="group relative backdrop-blur-lg bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl border border-white/20 hover:border-[#d0006f]/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#d0006f]/20">
                  <div className="absolute top-3 right-3 w-12 h-12 bg-[#d0006f]/20 rounded-full blur-xl group-hover:bg-[#d0006f]/30 transition-all"></div>
                  <div className="relative text-center">
                    <div className="flex items-baseline justify-center gap-2 mb-3">
                      <span className="text-6xl font-black bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent group-hover:from-white group-hover:to-[#d0006f] transition-all duration-300">
                        {Math.floor(animatedBatches)}
                      </span>
                      <span className="text-3xl font-bold text-[#d0006f] animate-pulse">+</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-8 h-0.5 bg-gradient-to-r from-[#d0006f] to-transparent"></div>
                      <p className="text-xs font-bold text-gray-300 uppercase tracking-widest">Batches</p>
                    </div>
                  </div>
                </div>

                {/* Stat 3 - Companies Founded */}
                <div className="group relative backdrop-blur-lg bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl border border-white/20 hover:border-[#d0006f]/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#d0006f]/20">
                  <div className="absolute top-3 right-3 w-12 h-12 bg-[#d0006f]/20 rounded-full blur-xl group-hover:bg-[#d0006f]/30 transition-all"></div>
                  <div className="relative text-center">
                    <div className="flex items-baseline justify-center gap-2 mb-3">
                      <span className="text-6xl font-black bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent group-hover:from-white group-hover:to-[#d0006f] transition-all duration-300">
                        {Math.floor(animatedCompanies)}
                      </span>
                      <span className="text-3xl font-bold text-[#d0006f] animate-pulse">+</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-8 h-0.5 bg-gradient-to-r from-[#d0006f] to-transparent"></div>
                      <p className="text-xs font-bold text-gray-300 uppercase tracking-widest">Companies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Statistics - Below Image */}
          <div className="lg:hidden absolute bottom-0 left-0 right-0 backdrop-blur-md bg-[#00002c]/80 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 py-10">
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="flex items-baseline justify-center gap-1 mb-1">
                    <span className="text-3xl font-black text-white">{Math.floor(animatedMembers)}</span>
                    <span className="text-lg font-bold text-[#d0006f]">+</span>
                  </div>
                  <p className="text-xs font-bold text-gray-300 uppercase">Members</p>
                </div>
                <div>
                  <div className="flex items-baseline justify-center gap-1 mb-1">
                    <span className="text-3xl font-black text-white">{Math.floor(animatedBatches)}</span>
                    <span className="text-lg font-bold text-[#d0006f]">+</span>
                  </div>
                  <p className="text-xs font-bold text-gray-300 uppercase">Batches</p>
                </div>
                <div>
                  <div className="flex items-baseline justify-center gap-1 mb-1">
                    <span className="text-3xl font-black text-white">{Math.floor(animatedCompanies)}</span>
                    <span className="text-lg font-bold text-[#d0006f]">+</span>
                  </div>
                  <p className="text-xs font-bold text-gray-300 uppercase">Companies</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Below Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

          {/* Join Our Community CTA
          <div className="mb-16 relative">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#d0006f]/20 via-[#00002c] to-[#d0006f]/10 border border-[#d0006f]/30 p-1">
              <div className="absolute inset-0 bg-gradient-to-r from-[#d0006f]/20 via-transparent to-[#d0006f]/20 animate-pulse"></div>
              
              <div className="relative bg-[#00002c] rounded-xl p-8 md:p-12">
                <div className="absolute top-10 right-10 w-32 h-32 bg-[#d0006f]/30 rounded-full blur-3xl animate-blob"></div>
                <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#d0006f]/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
                
                <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#d0006f]/20 border border-[#d0006f]/40 rounded-full mb-4">
                      <div className="w-2 h-2 bg-[#d0006f] rounded-full animate-pulse"></div>
                      <span className="text-[#d0006f] font-bold text-xs tracking-widest uppercase">Applications Open</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                      Become Part of{" "}
                      <span className="no-stroke bg-gradient-to-r from-[#d0006f] via-pink-400 to-[#d0006f] bg-clip-text text-transparent animate-pulse">
                        Our Community
                      </span>
                    </h2>
                    
                    <p className="text-lg text-gray-300 mb-6 max-w-2xl leading-relaxed">
                      Join Munich's most vibrant student entrepreneur community and build your startup with like-minded founders.
                    </p>
                  </div>

                  <div className="flex-shrink-0">
                    <a
                      href="https://www.startmunich.de/apply"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#d0006f] to-pink-600 hover:from-[#d0006f] hover:to-[#d0006f] text-white font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#d0006f]/50 overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
                      <span className="relative">Apply Now</span>
                      <svg className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Filter Section - Pill Style */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-3">
              {/* Batch Filter Pills */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Batch:</span>
                <button
                  onClick={() => setSelectedBatch("all")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedBatch === "all"
                      ? 'bg-gradient-to-r from-[#d0006f] to-purple-600 text-white shadow-lg shadow-[#d0006f]/30'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/20'
                  }`}
                >
                  All
                </button>
                {allBatches.map((batch) => (
                  <button
                    key={batch}
                    onClick={() => setSelectedBatch(batch)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedBatch === batch
                        ? 'bg-gradient-to-r from-[#d0006f] to-purple-600 text-white shadow-lg shadow-[#d0006f]/30'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/20'
                    }`}
                  >
                    {batch}
                  </button>
                ))}
              </div>

              {/* Divider */}
              <div className="h-8 w-px bg-white/20"></div>

              {/* Study Filter Pills */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Study:</span>
                <button
                  onClick={() => setSelectedStudy("all")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedStudy === "all"
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-600/30'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/20'
                  }`}
                >
                  All
                </button>
                {allStudies.slice(0, 4).map((study) => (
                  <button
                    key={study}
                    onClick={() => setSelectedStudy(study)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedStudy === study
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-600/30'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/20'
                    }`}
                  >
                    {study}
                  </button>
                ))}
              </div>

              {/* Clear Filters */}
              {(selectedBatch !== "all" || selectedStudy !== "all") && (
                <button
                  onClick={() => {
                    setSelectedBatch("all")
                    setSelectedStudy("all")
                  }}
                  className="ml-auto px-4 py-2 rounded-full text-sm font-medium text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/20 transition-all flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Clear
                </button>
              )}
            </div>
            
            {/* Results Count */}
            <div className="mt-4 text-sm text-gray-400">
              Showing <span className="text-white font-semibold">{filteredMembers.length}</span> member{filteredMembers.length !== 1 ? 's' : ''}
            </div>
          </div>

          {/* Batch Images Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
              Our <span className="no-stroke bg-gradient-to-r from-[#d0006f] to-purple-400 bg-clip-text text-transparent">Batches</span>
            </h2>
            
            {/* Show expanded batch full width if selected */}
            {expandedBatch ? (
              <div>
                {sortedBatches.filter(b => b.name === expandedBatch).map((batch) => (
                  <div key={batch.name} className="space-y-0">
                    <h3 className="text-2xl md:text-3xl font-black text-white text-left">
                      {batch.name}
                    </h3>
                    <button
                      onClick={() => setExpandedBatch(null)}
                      className="w-full block group relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#d0006f]/30"
                    >
                      {/* Background Image - Large (80% viewport height) */}
                      <div className="relative w-full h-[70vh] md:h-[70vh]">
                        <img
                          src="/batch.jpeg"
                          alt={batch.name}
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#00002c] via-[#00002c]/40 to-transparent"></div>
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#d0006f]/30 via-purple-400/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                      </div>
                      
                      {/* Corner Accent */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#d0006f] to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-3xl"></div>
                    </button>
                    
                    {/* Members Grid */}
                    <div className="animate-in fade-in slide-in-from-top-4 duration-500">
                      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-4">
                        {members.filter(m => m.batch === batch.name).map((member) => (
                          <a
                            key={member.id}
                            href={member.linkedinUrl || '#'}
                            target={member.linkedinUrl ? "_blank" : undefined}
                            rel={member.linkedinUrl ? "noopener noreferrer" : undefined}
                            className={`group relative overflow-hidden transition-all duration-300 hover:scale-105 ${member.linkedinUrl ? 'cursor-pointer' : 'cursor-default'} z-10`}
                          >
                            <div>
                              <img
                                src={member.imageUrl}
                                alt={member.name}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#00002c] via-[#00002c]/40 to-transparent"></div>
                              
                              {member.linkedinUrl && (
                                <div className="absolute top-2 right-2">
                                  <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24">
                                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                  </div>
                                </div>
                              )}
                              
                              <div className="absolute bottom-0 left-0 right-0 p-3">
                                <h4 className="font-bold text-white text-sm">{member.name}</h4>
                                <p className="text-pink-300 text-xs font-semibold">{member.study || member.role}</p>
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Show grid of batch thumbnails */
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sortedBatches.map((batch) => (
                  <div key={batch.name} className="space-y-3">
                    <h3 className="text-xl md:text-2xl font-black text-white">
                      {batch.name}
                    </h3>
                    <button
                      onClick={() => setExpandedBatch(batch.name)}
                      className="w-full group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#d0006f]/30 border-2 border-white/20"
                    >
                      {/* Background Image */}
                      <div className="relative">
                        <img
                          src="/batch.jpeg"
                          alt={batch.name}
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#00002c] via-[#00002c]/10 to-transparent"></div>
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#d0006f]/30 via-purple-400/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      
                      {/* Corner Accent */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#d0006f] to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-3xl"></div>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>        </div>

        {/* Footer CTA Section */}
        <div className="border-t border-white/10 mt-20 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Want to Learn More?
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Discover more about our programs and how we support student entrepreneurs
            </p>
            <a 
              href="https://www.startmunich.de"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 text-base font-medium text-[#00002c] bg-white hover:bg-gray-100 transition-all rounded group"
            >
              Visit Website
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
