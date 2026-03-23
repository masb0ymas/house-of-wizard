import { IconBook, IconTrophy, IconUsers } from '@tabler/icons-react'
import { BookOpen, Calendar, Clock, Sparkles, Trophy, Users } from 'lucide-react'

export const FEATURES = [
  {
    name: 'Expert Instructors',
    description:
      'Learn from industry professionals with years of experience in blockchain analytics',
    icon: IconUsers,
  },
  {
    name: 'Industry Recognition',
    description: 'Our certificates are recognized by leading Web3 companies worldwide',
    icon: IconTrophy,
  },
  {
    name: 'Comprehensive Curriculum',
    description: 'Structured learning path from basics to advanced blockchain analytics',
    icon: IconBook,
  },
]

export const TESTIMONIALS = [
  {
    name: 'Sarah Chen',
    username: '@sarahchen',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80',
    quote:
      "The course gave me the skills I needed to transition into Web3 analytics. Now I'm working with one of the top DeFi protocols.",
  },
  {
    name: 'Michael Rodriguez',
    username: '@michaelrodriguez',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80',
    quote:
      'Comprehensive curriculum that covers everything from basics to advanced topics. The practical projects were invaluable.',
  },
  {
    name: 'Emily Watson',
    username: '@emilywatson',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80',
    quote:
      'The instructors are true experts in their field. Their insights into NFT analytics helped me land my dream job.',
  },
]

export const FAQS = [
  {
    question: 'Do I need prior experience in data analysis?',
    answer:
      "No prior experience is required for our starter courses. We'll teach you everything from the basics of data analysis to advanced Web3 concepts.",
  },
  {
    question: 'How long does it take to complete the course?',
    answer:
      'The course is self-paced, but most students complete it within 3-4 months while studying part-time. The Professional track typically takes 5-6 months.',
  },
  {
    question: 'Are the certificates recognized in the industry?',
    answer:
      'Yes, our certificates are recognized by leading Web3 companies and protocols. Many of our graduates work at top blockchain companies.',
  },
  {
    question: 'Can I switch plans later?',
    answer:
      'Yes, you can upgrade your plan at any time. The price difference will be prorated for the remainder of your subscription.',
  },
  {
    question: 'Do you offer job placement assistance?',
    answer:
      'Yes, our Enterprise plan includes comprehensive job placement assistance, including resume reviews, interview preparation, and direct connections with hiring partners.',
  },
]

export const DIRECT_CONTACTS = [
  {
    name: 'Email',
    value: 'info@house-of-wizard.xyz',
    href: 'mailto:info@house-of-wizard.xyz',
  },
  {
    name: 'Telegram',
    value: '@HouseOfWizard',
    href: 'https://t.me/HouseofWizard',
  },
  {
    name: 'Community office hours',
    value: 'Wednesdays, 19:00-21:00 GMT+7',
    href: '#',
  },
  {
    name: 'Response time',
    value: 'Within 24 hours on business days',
    href: '#',
  },
]

export const COURSE_DETAIL_FEATURES = [
  {
    icon: BookOpen,
    title: 'Comprehensive Curriculum',
    description: 'Master Web3 data analysis through hands-on projects and real-world case studies',
  },
  {
    icon: Users,
    title: 'Small Batch Size',
    description: 'Limited to 20 students for personalized attention and better learning',
  },
  {
    icon: Clock,
    title: '16 Weeks Program',
    description: '3 live sessions per week, 2 hours each with recorded sessions',
  },
  {
    icon: Calendar,
    title: 'Flexible Schedule',
    description: 'Evening classes designed for working professionals',
  },
  {
    icon: Trophy,
    title: 'Industry Certificate',
    description: 'Earn a verified certificate upon course completion',
  },
  {
    icon: Sparkles,
    title: 'Career Support',
    description: '1-on-1 mentorship and job placement assistance',
  },
]

export const COURSE_CURRICULUM = [
  {
    week: 'Week 1-2',
    title: 'Foundations of Web3',
    topics: ['Blockchain fundamentals', 'Smart contracts', 'DeFi basics'],
  },
  {
    week: 'Week 3-4',
    title: 'Data Analysis Tools',
    topics: ['Python for blockchain', 'Web3 libraries', 'Data visualization'],
  },
  {
    week: 'Week 5-6',
    title: 'DeFi Analytics',
    topics: ['Liquidity analysis', 'Yield farming metrics', 'Risk assessment'],
  },
  {
    week: 'Week 7-8',
    title: 'NFT Market Analysis',
    topics: ['Collection analytics', 'Market trends', 'Rarity analysis'],
  },
  {
    week: 'Week 9-10',
    title: 'Advanced Topics',
    topics: ['MEV analysis', 'Cross-chain analytics', 'Protocol metrics'],
  },
  {
    week: 'Week 11-12',
    title: 'Final Project',
    topics: ['Real-world analysis', 'Portfolio building', 'Presentation'],
  },
]
