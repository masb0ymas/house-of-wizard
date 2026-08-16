'use client'

import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import { queries } from '@/lib/api/queries'
import { AuthSession } from '@/types/auth'

import { ActivityContent } from './activity/content'
import { AttendanceContent } from './attendance/content'
import { GeneralContent } from './general/content'
import { SecurityContent } from './security/content'
import { ProfileSidebar, type ProfileTab } from './sidebar'

interface ProfileContentProps {
  auth: AuthSession
}

export default function ProfileContent({ auth: _auth }: ProfileContentProps) {
  const [activeTab, setActiveTab] = useState<ProfileTab>('attendances')

  const { data: profileResponse, isLoading } = useQuery(queries.auth.profile())

  const user = profileResponse?.data ?? null

  const renderContent = () => {
    switch (activeTab) {
      case 'attendances':
        return <AttendanceContent />
      case 'general':
        return <GeneralContent user={user} loading={isLoading} />
      case 'security':
        return <SecurityContent />
      case 'activity':
        return <ActivityContent />
    }
  }

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 py-8 lg:flex-row lg:py-12">
        <ProfileSidebar activeTab={activeTab} onTabChange={setActiveTab} />
        <div className="flex-1">{renderContent()}</div>
      </div>
    </section>
  )
}
