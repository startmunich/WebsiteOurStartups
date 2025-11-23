// Mock member data for development and testing
// Based on the example.png reference image

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
}

export const mockMembers: Member[] = [
  {
    id: 1,
    name: "Sarah Chen",
    batch: "Winter 2024",
    role: "CEO & Co-Founder",
    study: "Computer Science",
    company: "TechFlow AI",
    linkedinUrl: "https://linkedin.com/in/sarahchen",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    bio: "Passionate about using AI to solve real-world problems. Previously at Google and Meta.",
    expertise: ["Machine Learning", "Product Strategy", "Leadership"],
    achievements: "Raised $5M seed round, 50K+ users in first year"
  },
  {
    id: 2,
    name: "Marcus Weber",
    batch: "Winter 2024",
    role: "CTO & Co-Founder",
    study: "Computer Science",
    company: "CloudSync",
    linkedinUrl: "https://linkedin.com/in/marcusweber",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Building scalable cloud infrastructure. Former principal engineer at AWS.",
    expertise: ["Cloud Architecture", "DevOps", "Distributed Systems"],
    achievements: "Built systems serving 10M+ daily active users"
  },
  {
    id: 3,
    name: "Priya Patel",
    batch: "Summer 2024",
    role: "CEO & Founder",
    study: "Medicine",
    company: "HealthTech Solutions",
    linkedinUrl: "https://linkedin.com/in/priyapatel",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    bio: "Revolutionizing healthcare delivery with technology. MD turned entrepreneur.",
    expertise: ["Healthcare", "Digital Health", "Product Development"],
    achievements: "Y Combinator W24, Partnership with 20+ hospitals"
  },
  {
    id: 4,
    name: "David Müller",
    batch: "Summer 2024",
    role: "CPO & Co-Founder",
    study: "Design",
    company: "DesignHub",
    linkedinUrl: "https://linkedin.com/in/davidmuller",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    bio: "Creating beautiful and functional design tools for the next generation of creators.",
    expertise: ["Product Design", "UX/UI", "Creative Tools"],
    achievements: "15K designers using platform, Featured in ProductHunt top 5"
  },
  {
    id: 5,
    name: "Lisa Anderson",
    batch: "Winter 2023",
    role: "CEO & Co-Founder",
    study: "Education",
    company: "EduTech Pro",
    linkedinUrl: "https://linkedin.com/in/lisaanderson",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    bio: "Making quality education accessible to everyone. Former teacher and education consultant.",
    expertise: ["EdTech", "Growth Marketing", "Business Development"],
    achievements: "100K+ students, 15 countries, €2M ARR"
  },
  {
    id: 6,
    name: "Alex Thompson",
    batch: "Winter 2023",
    role: "CTO & Co-Founder",
    study: "Business Administration",
    company: "FinanceFlow",
    linkedinUrl: "https://linkedin.com/in/alexthompson",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "Building modern financial infrastructure for SMEs. Ex-Goldman Sachs and Stripe.",
    expertise: ["FinTech", "Backend Engineering", "Security"],
    achievements: "€10M Series A, Processing €50M monthly"
  },
  {
    id: 7,
    name: "Nina Kowalski",
    batch: "Summer 2023",
    role: "CEO & Founder",
    study: "Environmental Science",
    company: "GreenTech Innovations",
    linkedinUrl: "https://linkedin.com/in/ninakowalski",
    imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    bio: "Fighting climate change through innovative sustainability solutions. Environmental scientist and entrepreneur.",
    expertise: ["Sustainability", "Climate Tech", "Impact Investing"],
    achievements: "B Corp certified, Reduced 50K tons CO2, €3M raised"
  },
  {
    id: 8,
    name: "James Park",
    batch: "Summer 2023",
    role: "CEO & Co-Founder",
    study: "Food Science",
    company: "FoodTech Labs",
    linkedinUrl: "https://linkedin.com/in/jamespark",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    bio: "Reimagining the food industry with sustainable alternatives. Former Michelin-starred chef.",
    expertise: ["Food Science", "Supply Chain", "Operations"],
    achievements: "Partnership with 100+ restaurants, €1.5M seed"
  },
  {
    id: 9,
    name: "Emma Schmidt",
    batch: "Winter 2025",
    role: "CPO & Co-Founder",
    study: "Engineering",
    company: "MobilityNext",
    linkedinUrl: "https://linkedin.com/in/emmaschmidt",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    bio: "Transforming urban mobility. Previously led product at Tesla and Uber.",
    expertise: ["Mobility", "Product Management", "IoT"],
    achievements: "Pilot in 3 cities, 5K daily rides"
  },
  {
    id: 10,
    name: "Omar Hassan",
    batch: "Winter 2025",
    role: "CTO & Co-Founder",
    study: "Computer Science",
    company: "DataSecure",
    linkedinUrl: "https://linkedin.com/in/omarhassan",
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    bio: "Building enterprise-grade security solutions. Cybersecurity expert and ethical hacker.",
    expertise: ["Cybersecurity", "Encryption", "Compliance"],
    achievements: "SOC 2 certified, Protecting 200+ companies"
  },
  {
    id: 11,
    name: "Sophie Laurent",
    batch: "Summer 2025",
    role: "CEO & Founder",
    study: "Media Studies",
    company: "AI Content Studio",
    linkedinUrl: "https://linkedin.com/in/sophielauren",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    bio: "Empowering creators with AI-powered content tools. Content creator turned entrepreneur.",
    expertise: ["Content Creation", "AI/ML", "Creator Economy"],
    achievements: "50K creators, $2M MRR, Featured in TechCrunch"
  },
  {
    id: 12,
    name: "Lucas Fernandez",
    batch: "Summer 2025",
    role: "CEO & Co-Founder",
    study: "Sports Science",
    company: "SportsTech Connect",
    linkedinUrl: "https://linkedin.com/in/lucasfernandez",
    imageUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop",
    bio: "Connecting athletes and fans through innovative technology. Former professional athlete.",
    expertise: ["Sports Tech", "Community Building", "Mobile Apps"],
    achievements: "200K athletes, Partnership with 5 leagues"
  },
  {
    id: 13,
    name: "Anna Bergström",
    batch: "Winter 2024",
    role: "COO & Co-Founder",
    study: "Business Administration",
    company: "LogiChain",
    linkedinUrl: "https://linkedin.com/in/annabergstrom",
    imageUrl: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop",
    bio: "Optimizing supply chains with AI. Former consultant at McKinsey.",
    expertise: ["Supply Chain", "Operations", "B2B SaaS"],
    achievements: "40% cost reduction for clients, €4M ARR"
  },
  {
    id: 14,
    name: "Mohammed Al-Rashid",
    batch: "Winter 2024",
    role: "CEO & Founder",
    study: "Real Estate Management",
    company: "PropTech Solutions",
    linkedinUrl: "https://linkedin.com/in/mohammedalrashid",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&sat=-100",
    bio: "Digitizing the real estate industry. 15 years in property development and technology.",
    expertise: ["PropTech", "Real Estate", "Digital Transformation"],
    achievements: "€500M properties listed, 10K+ transactions"
  },
  {
    id: 15,
    name: "Isabella Rossi",
    batch: "Summer 2024",
    role: "CMO & Co-Founder",
    study: "Marketing",
    company: "MarketingAI",
    linkedinUrl: "https://linkedin.com/in/isabellarossi",
    imageUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop",
    bio: "AI-powered marketing automation for SMBs. Former VP Marketing at HubSpot.",
    expertise: ["Digital Marketing", "Growth Hacking", "AI"],
    achievements: "1000+ customers, 3x revenue growth YoY"
  },
  {
    id: 16,
    name: "Tom Nielsen",
    batch: "Summer 2024",
    role: "CTO & Co-Founder",
    study: "Computer Science",
    company: "BlockChain Ventures",
    linkedinUrl: "https://linkedin.com/in/tomnielsen",
    imageUrl: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop",
    bio: "Building the future of decentralized finance. Blockchain developer since 2015.",
    expertise: ["Blockchain", "DeFi", "Smart Contracts"],
    achievements: "$100M+ TVL, Audited by top firms"
  },
  {
    id: 17,
    name: "Yuki Tanaka",
    batch: "Winter 2023",
    role: "CEO & Founder",
    study: "Robotics Engineering",
    company: "RoboticsLab",
    linkedinUrl: "https://linkedin.com/in/yukitanaka",
    imageUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop",
    bio: "Advancing robotics for manufacturing. PhD in Robotics from MIT.",
    expertise: ["Robotics", "Automation", "Manufacturing"],
    achievements: "20+ patents, €8M Series A"
  },
  {
    id: 18,
    name: "Carlos Mendoza",
    batch: "Winter 2023",
    role: "CEO & Co-Founder",
    study: "Agricultural Engineering",
    company: "AgriTech Future",
    linkedinUrl: "https://linkedin.com/in/carlosmendoza",
    imageUrl: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?w=400&h=400&fit=crop",
    bio: "Sustainable farming through technology. Agricultural engineer and data scientist.",
    expertise: ["AgriTech", "IoT", "Sustainability"],
    achievements: "10K+ farms using platform, 30% yield increase"
  },
  {
    id: 19,
    name: "Rachel Cohen",
    batch: "Summer 2023",
    role: "CPO & Founder",
    study: "Psychology",
    company: "MentalHealth Plus",
    linkedinUrl: "https://linkedin.com/in/rachelcohen",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    bio: "Making mental health support accessible and affordable. Licensed therapist and tech entrepreneur.",
    expertise: ["Mental Health", "Digital Health", "Product"],
    achievements: "50K+ users helped, Partnership with 100+ therapists"
  },
  {
    id: 20,
    name: "Viktor Ivanov",
    batch: "Summer 2023",
    role: "CTO & Co-Founder",
    study: "Game Development",
    company: "GameTech Studios",
    linkedinUrl: "https://linkedin.com/in/viktorivanov",
    imageUrl: "https://images.unsplash.com/photo-1464863979621-258859e62245?w=400&h=400&fit=crop",
    bio: "Creating immersive gaming experiences. Former lead engineer at EA and Ubisoft.",
    expertise: ["Game Development", "Graphics", "VR/AR"],
    achievements: "2M+ downloads, Featured by Apple and Google"
  },
  {
    id: 21,
    name: "Fatima Ahmed",
    batch: "Winter 2025",
    role: "CEO & Founder",
    study: "Law",
    company: "LegalTech Pro",
    linkedinUrl: "https://linkedin.com/in/fatimaahmed",
    imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop",
    bio: "Democratizing legal services with AI. Lawyer and legal tech innovator.",
    expertise: ["LegalTech", "AI", "SaaS"],
    achievements: "5K+ legal professionals using platform"
  },
  {
    id: 22,
    name: "Henrik Larsson",
    batch: "Winter 2025",
    role: "CEO & Co-Founder",
    study: "Energy Engineering",
    company: "EnergyNext",
    linkedinUrl: "https://linkedin.com/in/henriklarsson",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    bio: "Clean energy solutions for smart cities. Energy engineer and sustainability advocate.",
    expertise: ["Clean Energy", "Smart Grids", "IoT"],
    achievements: "Partner with 5 cities, 20MW capacity"
  },
  {
    id: 23,
    name: "Maya Gupta",
    batch: "Summer 2025",
    role: "CPO & Co-Founder",
    study: "Tourism Management",
    company: "TravelTech Hub",
    linkedinUrl: "https://linkedin.com/in/mayagupta",
    imageUrl: "https://images.unsplash.com/photo-1558222218-b7b54eede3f3?w=400&h=400&fit=crop",
    bio: "Reinventing travel planning with AI. Former product lead at Airbnb.",
    expertise: ["Travel Tech", "Product", "Mobile"],
    achievements: "100K+ trips planned, 4.9 app rating"
  },
  {
    id: 24,
    name: "Sebastian Bach",
    batch: "Summer 2025",
    role: "CTO & Founder",
    study: "Music Technology",
    company: "AudioTech Labs",
    linkedinUrl: "https://linkedin.com/in/sebastianbach",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&sat=-100",
    bio: "Next-generation audio technology. Audio engineer and music producer turned entrepreneur.",
    expertise: ["Audio Engineering", "Signal Processing", "Music Tech"],
    achievements: "Used by Grammy winners, €2.5M seed"
  }
]

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
