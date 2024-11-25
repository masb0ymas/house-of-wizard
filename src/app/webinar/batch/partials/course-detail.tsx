import { BookOpen, Calendar, Clock, Sparkles, Trophy, Users } from 'lucide-react'
import React from 'react'

interface FeatureProps {
  icon: React.ReactNode
  title: string
  description: string
}

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div className="flex flex-row items-center gap-4 p-6 bg-background rounded-xl hover:shadow-lg transition-all duration-300 z-10">
      <div className="flex-shrink-0 text-gray-900">{icon}</div>
      <div>
        <h3 className="font-semibold font-serif tracking-wide text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-900">{description}</p>
      </div>
    </div>
  )
}

export default function CourseDetails() {
  const features = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: 'Comprehensive Curriculum',
      description:
        'Master Web3 data analysis through hands-on projects and real-world case studies',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Small Batch Size',
      description: 'Limited to 20 students for personalized attention and better learning',
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: '16 Weeks Program',
      description: '3 live sessions per week, 2 hours each with recorded sessions',
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: 'Flexible Schedule',
      description: 'Evening classes designed for working professionals',
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: 'Industry Certificate',
      description: 'Earn a verified certificate upon course completion',
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: 'Career Support',
      description: '1-on-1 mentorship and job placement assistance',
    },
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-6">
      {features.map((feature, index) => (
        <Feature key={index} {...feature} />
      ))}
    </div>
  )
}
