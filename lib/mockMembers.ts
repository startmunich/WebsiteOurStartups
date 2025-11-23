// Mock member data for development and testing
// Base members that are replicated across all batches

export interface Member {
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
  gender?: string
}

// Base member templates (8 unique members)
const baseMemberTemplates = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    study: "Computer Science",
    company: "TechFlow AI",
    linkedinUrl: "https://linkedin.com/in/sarahchen",
    imageUrl: "/example.png",
    bio: "Passionate about using AI to solve real-world problems. Previously at Google and Meta.",
    expertise: ["Machine Learning", "Product Strategy", "Leadership"],
    achievements: "Raised $5M seed round, 50K+ users in first year",
    gender: "female"
  },
  {
    name: "Marcus Weber",
    role: "CTO & Co-Founder",
    study: "Computer Science",
    company: "CloudSync",
    linkedinUrl: "https://linkedin.com/in/marcusweber",
    imageUrl: "/example.png",
    bio: "Building scalable cloud infrastructure. Former principal engineer at AWS.",
    expertise: ["Cloud Architecture", "DevOps", "Distributed Systems"],
    achievements: "Built systems serving 10M+ daily active users",
    gender: "male"
  },
  {
    name: "Priya Patel",
    role: "CEO & Founder",
    study: "Medicine",
    company: "HealthTech Solutions",
    linkedinUrl: "https://linkedin.com/in/priyapatel",
    imageUrl: "/example.png",
    bio: "Revolutionizing healthcare delivery with technology. MD turned entrepreneur.",
    expertise: ["Healthcare", "Digital Health", "Product Development"],
    achievements: "Y Combinator W24, Partnership with 20+ hospitals",
    gender: "female"
  },
  {
    name: "David Müller",
    role: "CPO & Co-Founder",
    study: "Design",
    company: "DesignHub",
    linkedinUrl: "https://linkedin.com/in/davidmuller",
    imageUrl: "/example.png",
    bio: "Creating beautiful and functional design tools for the next generation of creators.",
    expertise: ["Product Design", "UX/UI", "Creative Tools"],
    achievements: "15K designers using platform, Featured in ProductHunt top 5",
    gender: "male"
  },
  {
    name: "Lisa Anderson",
    role: "CEO & Co-Founder",
    study: "Business Administration",
    company: "EduTech Pro",
    linkedinUrl: "https://linkedin.com/in/lisaanderson",
    imageUrl: "/example.png",
    bio: "Making quality education accessible to everyone. Former teacher and education consultant.",
    expertise: ["EdTech", "Growth Marketing", "Business Development"],
    achievements: "100K+ students, 15 countries, €2M ARR",
    gender: "female"
  },
  {
    name: "Alex Thompson",
    role: "CTO & Co-Founder",
    study: "Engineering",
    company: "FinanceFlow",
    linkedinUrl: "https://linkedin.com/in/alexthompson",
    imageUrl: "/example.png",
    bio: "Building modern financial infrastructure for SMEs. Ex-Goldman Sachs and Stripe.",
    expertise: ["FinTech", "Backend Engineering", "Security"],
    achievements: "€10M Series A, Processing €50M monthly",
    gender: "male"
  },
  {
    name: "Nina Kowalski",
    role: "CEO & Founder",
    study: "Environmental Science",
    company: "GreenTech Innovations",
    linkedinUrl: "https://linkedin.com/in/ninakowalski",
    imageUrl: "/example.png",
    bio: "Fighting climate change through innovative sustainability solutions. Environmental scientist and entrepreneur.",
    expertise: ["Sustainability", "Climate Tech", "Impact Investing"],
    achievements: "B Corp certified, Reduced 50K tons CO2, €3M raised",
    gender: "female"
  },
  {
    name: "James Park",
    role: "CEO & Co-Founder",
    study: "Marketing",
    company: "FoodTech Labs",
    linkedinUrl: "https://linkedin.com/in/jamespark",
    imageUrl: "/example.png",
    bio: "Reimagining the food industry with sustainable alternatives. Former Michelin-starred chef.",
    expertise: ["Food Science", "Supply Chain", "Operations"],
    achievements: "Partnership with 100+ restaurants, €1.5M seed",
    gender: "male"
  }
]

// All batches
const allBatches = [
  "Winter 2025",
  "Summer 2025", 
  "Winter 2024",
  "Summer 2024",
  "Winter 2023",
  "Summer 2023"
]

// Generate members: replicate base members across all batches (about 30 per batch)
let idCounter = 1
export const mockMembers: Member[] = []

allBatches.forEach(batch => {
  // Add each base member 4 times to simulate ~32 members per batch
  for (let repeat = 0; repeat < 4; repeat++) {
    baseMemberTemplates.forEach(template => {
      mockMembers.push({
        id: idCounter++,
        batch,
        ...template
      })
    })
  }
})

// Helper function to get members by batch
export function getMembersByBatch(batch: string): Member[] {
  return mockMembers.filter(member => member.batch === batch)
}

// Helper function to get members by role
export function getMembersByRole(role: string): Member[] {
  return mockMembers.filter(member => member.role === role)
}

// Helper function to get all unique batches
export function getAllBatches(): string[] {
  return Array.from(new Set(mockMembers.map(m => m.batch))).sort().reverse()
}

// Helper function to get all unique roles
export function getAllRoles(): string[] {
  return Array.from(new Set(mockMembers.map(m => m.role))).sort()
}
