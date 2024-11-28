import { IconCalendar, IconClock } from '@tabler/icons-react'
import { Globe, MonitorPlay } from 'lucide-react'
import Image from 'next/image'

export default function CourseDetail() {
  const course = {
    name: 'Webinar Live Private Batch 1',
    instructor: 'Lydia',
    date: 'March 25, 2024',
    time: '10:00 AM PST',
    duration: '6 weeks',
    type: 'Live Online Course',
    image: '/logo-how.png',
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
      <div className="flex gap-6">
        <Image
          src={course.image}
          alt={course.name}
          className="w-24 h-24 object-cover rounded-lg"
          width={96}
          height={96}
        />
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{course.name}</h2>
          <p className="text-gray-600 mb-4">Instructor: {course.instructor}</p>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <IconCalendar className="w-4 h-4" />
              <span className="text-sm">{course.date}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <IconClock className="w-4 h-4" />
              <span className="text-sm">{course.time}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <MonitorPlay className="w-4 h-4" />
              <span className="text-sm">{course.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Globe className="w-4 h-4" />
              <span className="text-sm">{course.type}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
