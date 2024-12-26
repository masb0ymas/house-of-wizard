import {
  IconCalendar,
  IconCertificate,
  IconLogout,
  IconPassword,
  IconReceipt,
  IconUser,
  IconUsers,
} from '@tabler/icons-react'

export const menus = [
  {
    group: 'Activity',
    items: [
      {
        name: 'Attendance',
        href: '/attendance',
        icon: IconCalendar,
      },
    ],
  },
  {
    group: 'Private Webinar',
    items: [
      {
        name: 'Attendance',
        href: '/private/attendance',
        icon: IconCalendar,
      },
      {
        name: 'Membership',
        href: '/private/membership',
        icon: IconUsers,
      },
      {
        name: 'Certificate',
        href: '/private/certificate',
        icon: IconCertificate,
      },
    ],
  },
  {
    group: 'Billing',
    items: [
      {
        name: 'Transaction',
        href: '/billing/transaction',
        icon: IconReceipt,
      },
    ],
  },
  {
    group: 'Account',
    items: [
      {
        name: 'Profile',
        href: '/account/profile',
        icon: IconUser,
      },
      {
        name: 'Change Password',
        href: '/account/change-password',
        icon: IconPassword,
      },
      {
        name: 'Logout',
        href: '/account/logout',
        icon: IconLogout,
      },
    ],
  },
]
