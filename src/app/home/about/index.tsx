import { IconBook, IconUsers } from '@tabler/icons-react'
import { Trophy } from 'lucide-react'

const features = [
  {
    name: 'Expert Instructors',
    description:
      'Learn from industry professionals with years of experience in blockchain analytics',
    icon: IconUsers,
  },
  {
    name: 'Industry Recognition',
    description: 'Our certificates are recognized by leading Web3 companies worldwide',
    icon: Trophy,
  },
  {
    name: 'Comprehensive Curriculum',
    description: 'Structured learning path from basics to advanced blockchain analytics',
    icon: IconBook,
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 font-serif tracking-wide">About House of Wizard</h2>
          <p className="mt-4 text-xl text-gray-600">Leading the revolution in Web3 Education</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature) => (
            <div key={feature.name} className="text-center space-y-4">
              <div className="flex justify-center">
                <feature.icon className="h-12 w-12 text-indigo-600" strokeWidth={1.8} />
              </div>
              <h3 className="text-xl font-semibold font-serif tracking-wide">{feature.name}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
