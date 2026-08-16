'use client'

import { IconActivity, IconCalendarCheck, IconLock, IconUser } from '@tabler/icons-react'

import { cn } from '@/lib/utils'

export type ProfileTab = 'attendances' | 'general' | 'security' | 'activity'

interface ProfileSidebarProps {
  activeTab: ProfileTab
  onTabChange: (tab: ProfileTab) => void
}

const menuItems: { id: ProfileTab; label: string; icon: typeof IconUser }[] = [
  { id: 'attendances', label: 'Attendances', icon: IconCalendarCheck },
  { id: 'general', label: 'General', icon: IconUser },
  { id: 'security', label: 'Security', icon: IconLock },
  { id: 'activity', label: 'Activity', icon: IconActivity },
]

export function ProfileSidebar({ activeTab, onTabChange }: ProfileSidebarProps) {
  return (
    <nav className="w-full shrink-0 lg:w-56">
      <ul className="flex flex-row gap-1 lg:flex-col">
        {menuItems.map((item) => {
          const isActive = activeTab === item.id
          return (
            <li key={item.id}>
              <button
                onClick={() => onTabChange(item.id)}
                className={cn(
                  'flex w-full items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-purple-50 text-purple-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                )}
              >
                <item.icon className="h-5 w-5" />
                <span className="hidden lg:inline">{item.label}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
