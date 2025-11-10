"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Founder {
  name: string
  role: string
  batch: string
  imageUrl: string
}

interface Company {
  id: number
  name: string
  website: string
  description: string
  logoUrl: string
  foundingYear: number
  category: string[]
  founders: Founder[]
}

const companies: Company[] = [
  {
    id: 1,
    name: "Forto",
    website: "forto.com",
    description: "Forto's logistics platform covers the entire supply chain process, from offer to booking, document administration, tracking and tracing. By delivering a highly transparent, frictionless, and sustainable digital supply chain, Forto supports its customers with greater visibility, insight, and control. Leading manufacturers and e-commerce brands are among the 2,500 customers using Forto's digitally-focused offerings as part of their supply chain delivery.",
    logoUrl: "https://ui-avatars.com/api/?name=Forto&size=300&background=1a1f3a&color=fff&bold=true&font-size=0.4",
    foundingYear: 2016,
    category: ["SaaS", "Logistics", "Supply Chain"],
    founders: [
      {
        name: "Erik Muttersbach",
        role: "CEO",
        batch: "Spring 2013",
        imageUrl: "https://ui-avatars.com/api/?name=Erik+Muttersbach&size=80&background=4f46e5&color=fff"
      },
      {
        name: "Michael Wax",
        role: "CTO",
        batch: "Spring 2013",
        imageUrl: "https://ui-avatars.com/api/?name=Michael+Wax&size=80&background=0891b2&color=fff"
      }
    ]
  },
  {
    id: 2,
    name: "TechVenture",
    website: "techventure.io",
    description: "TechVenture is revolutionizing the way businesses approach digital transformation. With cutting-edge AI and machine learning solutions, we help companies automate processes, gain insights from data, and scale their operations efficiently. Our platform serves over 1,000 enterprises worldwide.",
    logoUrl: "https://ui-avatars.com/api/?name=TechVenture&size=300&background=2c3e50&color=fff&bold=true&font-size=0.4",
    foundingYear: 2018,
    category: ["AI", "SaaS", "Manufacturing"],
    founders: [
      {
        name: "Sarah Johnson",
        role: "CEO & Founder",
        batch: "Fall 2015",
        imageUrl: "https://ui-avatars.com/api/?name=Sarah+Johnson&size=80&background=ec4899&color=fff"
      }
    ]
  },
  {
    id: 3,
    name: "FinanceFlow",
    website: "financeflow.com",
    description: "FinanceFlow provides next-generation financial management tools for small and medium-sized businesses. Our cloud-based platform simplifies accounting, invoicing, and financial reporting, helping businesses make better financial decisions with real-time insights and automation.",
    logoUrl: "https://ui-avatars.com/api/?name=FinanceFlow&size=300&background=27ae60&color=fff&bold=true&font-size=0.4",
    foundingYear: 2017,
    category: ["SaaS", "FinTech", "Accounting"],
    founders: [
      {
        name: "David Chen",
        role: "CEO",
        batch: "Spring 2013",
        imageUrl: "https://ui-avatars.com/api/?name=David+Chen&size=80&background=8b5cf6&color=fff"
      },
      {
        name: "Lisa Park",
        role: "CFO",
        batch: "Fall 2014",
        imageUrl: "https://ui-avatars.com/api/?name=Lisa+Park&size=80&background=f59e0b&color=fff"
      }
    ]
  },
  {
    id: 4,
    name: "HealthTech Solutions",
    website: "healthtech.io",
    description: "HealthTech Solutions is transforming healthcare delivery through innovative technology. Our telemedicine platform connects patients with healthcare providers, streamlines medical records management, and improves patient outcomes through data-driven insights and personalized care.",
    logoUrl: "https://ui-avatars.com/api/?name=HealthTech&size=300&background=e74c3c&color=fff&bold=true&font-size=0.4",
    foundingYear: 2019,
    category: ["HealthTech", "SaaS", "Telemedicine"],
    founders: [
      {
        name: "Dr. Amanda Rodriguez",
        role: "CEO & Chief Medical Officer",
        batch: "Fall 2015",
        imageUrl: "https://ui-avatars.com/api/?name=Amanda+Rodriguez&size=80&background=10b981&color=fff"
      },
      {
        name: "James Wilson",
        role: "CTO",
        batch: "Spring 2016",
        imageUrl: "https://ui-avatars.com/api/?name=James+Wilson&size=80&background=3b82f6&color=fff"
      }
    ]
  },
  {
    id: 5,
    name: "EduLearn",
    website: "edulearn.com",
    description: "EduLearn is democratizing education through our interactive online learning platform. We offer courses in technology, business, and creative skills, with personalized learning paths and real-world projects. Over 500,000 students have advanced their careers through our platform.",
    logoUrl: "https://ui-avatars.com/api/?name=EduLearn&size=300&background=9b59b6&color=fff&bold=true&font-size=0.4",
    foundingYear: 2020,
    category: ["EdTech", "AI", "SaaS"],
    founders: [
      {
        name: "Robert Martinez",
        role: "Founder & CEO",
        batch: "Fall 2014",
        imageUrl: "https://ui-avatars.com/api/?name=Robert+Martinez&size=80&background=ef4444&color=fff"
      }
    ]
  }
]

export default function Home() {
  const [selectedBatch, setSelectedBatch] = useState<string>("all")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedYear, setSelectedYear] = useState<string>("all")
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set())

  // Extract unique batches from all founders
  const allBatches = Array.from(
    new Set(
      companies.flatMap(company => 
        company.founders.map(founder => founder.batch)
      )
    )
  ).sort()

  // Extract unique categories
  const allCategories = Array.from(
    new Set(
      companies.flatMap(company => company.category)
    )
  ).sort()

  // Extract unique founding years
  const allYears = Array.from(
    new Set(
      companies.map(company => company.foundingYear.toString())
    )
  ).sort()

  // Filter companies based on all selected filters
  const filteredCompanies = companies.filter(company => {
    const matchesBatch = selectedBatch === "all" || 
      company.founders.some(founder => founder.batch === selectedBatch)
    
    const matchesCategory = selectedCategory === "all" || 
      company.category.includes(selectedCategory)
    
    const matchesYear = selectedYear === "all" || 
      company.foundingYear.toString() === selectedYear

    return matchesBatch && matchesCategory && matchesYear
  })

  const toggleCard = (id: number) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-[#d0006f] font-bold text-sm tracking-wider uppercase mb-3">WANNA LEARN MORE?</p>
          <h1 className="text-5xl md:text-7xl font-black text-[#00002c] tracking-tight uppercase mb-2">Startup Directory</h1>
        </div>

        {/* Filter Section */}
        <div className="mb-12 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-black text-[#00002c] mb-6 uppercase tracking-tight">Filters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Batch Filter */}
            <div>
              <label htmlFor="batch-filter" className="block text-sm font-bold text-[#00002c] mb-3 uppercase tracking-wide">
                Batch
              </label>
              <Select value={selectedBatch} onValueChange={setSelectedBatch}>
                <SelectTrigger className="w-full border-[#00002c] focus:ring-[#d0006f]">
                  <SelectValue placeholder="Select batch" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Batches</SelectItem>
                  {allBatches.map((batch) => (
                    <SelectItem key={batch} value={batch}>
                      {batch}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Category Filter */}
            <div>
              <label htmlFor="category-filter" className="block text-sm font-bold text-[#00002c] mb-3 uppercase tracking-wide">
                Category
              </label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full border-[#00002c] focus:ring-[#d0006f]">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {allCategories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Founding Year Filter */}
            <div>
              <label htmlFor="year-filter" className="block text-sm font-bold text-[#00002c] mb-3 uppercase tracking-wide">
                Founded
              </label>
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-full border-[#00002c] focus:ring-[#d0006f]">
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Years</SelectItem>
                  {allYears.map((year) => (
                    <SelectItem key={year} value={year}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Clear Filters Button */}
            <div className="flex items-end">
              <button
                onClick={() => {
                  setSelectedBatch("all")
                  setSelectedCategory("all")
                  setSelectedYear("all")
                }}
                className="w-full px-6 py-3 text-sm font-bold text-white bg-[#d0006f] hover:bg-[#a0005a] rounded-lg transition-colors uppercase tracking-wide shadow-md hover:shadow-lg"
              >
                Clear Filters
              </button>
            </div>
          </div>
          <p className="mt-6 text-sm font-semibold text-gray-600">
            Showing {filteredCompanies.length} {filteredCompanies.length === 1 ? 'company' : 'companies'}
          </p>
        </div>

        {/* Company List */}
        <div className="space-y-4">
          {filteredCompanies.map((company) => {
            const isExpanded = expandedCards.has(company.id)
            return (
              <Card key={company.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#d0006f]">
                <div className="md:flex">
                  {/* Logo Section - Only show when expanded */}
                  {isExpanded && (
                    <div className="md:flex-shrink-0 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8 md:w-64">
                      <img
                        src={company.logoUrl}
                        alt={`${company.name} logo`}
                        className="w-full object-contain"
                      />
                    </div>
                  )}

                  {/* Content Section */}
                  <div className="flex-1">
                    <CardHeader 
                      className="pb-3 pt-4 cursor-pointer"
                      onClick={() => toggleCard(company.id)}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-2xl font-black text-[#00002c] tracking-tight uppercase mb-1">{company.name}</CardTitle>
                          <a 
                            href={`https://${company.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#d0006f] hover:text-[#a0005a] hover:underline font-semibold text-sm"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {company.website}
                          </a>
                        </div>
                        <button
                          className="text-[#d0006f] font-bold text-2xl hover:text-[#a0005a] transition-transform duration-300"
                          style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                        >
                          ↓
                        </button>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 mt-3">
                        <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">Founded {company.foundingYear}</span>
                        <span className="text-gray-400 font-bold">•</span>
                        <div className="flex flex-wrap gap-1.5">
                          {company.category.map((cat, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-[#00002c] text-white uppercase tracking-wide"
                            >
                              {cat}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardHeader>

                    {isExpanded && (
                      <CardContent className="pt-2 pb-4">
                        <CardDescription className="text-base leading-relaxed mb-6 text-gray-700">
                          {company.description}
                        </CardDescription>

                        {/* Founders Section */}
                        {company.founders.length > 0 && (
                          <div>
                            <h3 className="text-sm font-black text-[#00002c] mb-3 uppercase tracking-wider">
                              CDTM {company.founders.length > 1 ? 'founders' : 'founder'}
                            </h3>
                            <div className="flex flex-wrap gap-4">
                              {company.founders.map((founder, index) => (
                                <div key={index} className="flex items-center gap-3">
                                  <img
                                    src={founder.imageUrl}
                                    alt={founder.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                                  />
                                  <div>
                                    <p className="font-bold text-gray-900 text-sm">{founder.name}</p>
                                    <p className="text-xs font-bold text-[#d0006f] uppercase tracking-wide">{founder.role}</p>
                                    <p className="text-xs text-gray-600 font-medium">{founder.batch}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    )}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {filteredCompanies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No companies found matching the selected filters.</p>
          </div>
        )}
      </div>
    </main>
  )
}
