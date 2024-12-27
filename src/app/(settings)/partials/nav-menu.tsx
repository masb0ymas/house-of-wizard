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
    group: 'Webinar',
    items: [
      {
        name: 'Attendance',
        href: '/attendance',
        icon: IconCalendar,
      },
      {
        name: 'Membership',
        href: '/membership',
        icon: IconUsers,
      },
      {
        name: 'Certificate',
        href: '/certificate',
        icon: IconCertificate,
      },
    ],
  },
  {
    group: 'Billing',
    items: [
      {
        name: 'Transaction',
        href: '/transaction',
        icon: IconReceipt,
      },
    ],
  },
  {
    group: 'Account',
    items: [
      {
        name: 'Profile',
        href: '/profile',
        icon: IconUser,
      },
      {
        name: 'Change Password',
        href: '/change-password',
        icon: IconPassword,
      },
      {
        name: 'Logout',
        href: '/logout',
        icon: IconLogout,
      },
    ],
  },
]
