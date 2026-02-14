"use client"

import { useState, useEffect } from 'react'
import Script from 'next/script'

export const dynamic = 'force-dynamic'

interface Partner {
  id: string
  name: string
  category: string
  logoUrl: string
}

// Fetch partners from API
async function fetchPartners(): Promise<Partner[]> {
  try {
    // Use absolute URL in production, relative in development
    const baseUrl = typeof window !== 'undefined'
      ? window.location.origin
      : process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

    const response = await fetch(`${baseUrl}/api/partners`, {
      cache: 'no-store', // Ensure fresh data
    });

    if (!response.ok) {
      console.error(`API error: ${response.status} ${response.statusText}`);
      throw new Error('Failed to fetch partners');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching partners:', error);
    return [];
  }
}

interface PartnersByCategory {
  [category: string]: Partner[]
}

export default function PartnersPage() {
  const [loading, setLoading] = useState(true)
  const [partners, setPartners] = useState<Partner[]>([])
  const [partnersByCategory, setPartnersByCategory] = useState<PartnersByCategory>({})

  useEffect(() => {
    const loadPartners = async () => {
      setLoading(true)
      const data = await fetchPartners()
      setPartners(data)

      // Group partners by category
      const grouped = data.reduce((acc: PartnersByCategory, partner) => {
        const category = partner.category || 'Other'
        if (!acc[category]) {
          acc[category] = []
        }
        acc[category].push(partner)
        return acc
      }, {})

      setPartnersByCategory(grouped)
      setLoading(false)
    }

    loadPartners()
  }, [])

  if (loading) {
    return (
      <main className="min-h-screen bg-brand-dark-blue py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-2xl font-bold text-white">Loading partners...</p>
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

      <main className="min-h-screen bg-brand-dark-blue">
        {/* Hero Section */}
        <div className="relative w-full overflow-hidden h-[600px]">
          {/* Background Image + Overlay */}
          <div className="absolute inset-0 h-full">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
              alt="Our Partners"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 h-full bg-brand-dark-blue/70"></div>
          </div>

          {/* Content Overlay */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 h-full flex items-center">
            <div className="flex-1 max-w-3xl text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white mb-4 sm:mb-6 animate-[flyInFromTop_0.6s_ease-out]">
                OUR
                <br />
                <span className="outline-text">PARTNERS</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
                Discover the companies that engage the START spirit and empower our entrepreneurial community
              </p>
            </div>
          </div>
        </div>

        {/* Content Below Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-20">

          {/* Partner Categories */}
          {Object.keys(partnersByCategory).sort((a, b) => {
            const order = [
              'TECHNOLOGY',
              'VENTURE CAPITAL',
              'ECOSYSTEM',
              'INITIATIVES',
              'STARTUP',
              'INDUSTRY',
              'OTHER'
            ];

            const indexA = order.indexOf(a.toUpperCase());
            const indexB = order.indexOf(b.toUpperCase());

            // If both are in the list, sort by index
            if (indexA !== -1 && indexB !== -1) {
              return indexA - indexB;
            }

            // If only A is in the list, it comes first
            if (indexA !== -1) {
              return -1;
            }

            // If only B is in the list, it comes first
            if (indexB !== -1) {
              return 1;
            }

            // If neither is in the list, sort alphabetically
            return a.localeCompare(b);
          }).map((categoryName) => (
            <div key={categoryName} className="mb-20">
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                  {categoryName.toUpperCase().split(' ')[0]}{' '}
                  <span className="outline-text">
                    {categoryName.toUpperCase().split(' ').slice(1).join(' ') || ''}
                  </span>
                </h2>
              </div>

              {/* Partners Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {partnersByCategory[categoryName].map((partner: Partner) => (
                  <div
                    key={partner.id}
                    className="group relative"
                  >
                    {/* Logo Card */}
                    <div className="relative bg-white rounded-lg p-6 h-32 flex items-center justify-center transition-all duration-300 group-hover:shadow-xl group-hover:shadow-brand-pink/20 group-hover:scale-105 border-2 border-transparent group-hover:border-brand-pink">
                      <img
                        src={partner.logoUrl}
                        alt={partner.name}
                        className="max-w-full max-h-full object-contain transition-all duration-300"
                        onError={(e) => {
                          // Fallback to initials if logo fails to load
                          const target = e.target as HTMLImageElement
                          target.style.display = 'none'
                          const parent = target.parentElement
                          if (parent) {
                            const fallback = document.createElement('div')
                            fallback.className = 'text-2xl font-bold text-gray-600'
                            fallback.textContent = partner.name.split(' ').map((w: string) => w[0]).join('').slice(0, 2)
                            parent.appendChild(fallback)
                          }
                        }}
                      />
                    </div>
                    {/* Partner Name */}
                    <div className="mt-3 text-center">
                      <p className="text-white font-bold text-sm group-hover:text-brand-pink transition-colors duration-300">
                        {partner.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
