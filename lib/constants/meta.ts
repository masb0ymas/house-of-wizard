import { Metadata } from 'next'

import { env } from '@/config/env'

export const META_URL = env.BETTER_AUTH_URL
export const META_TITLE = `House of Wizard - Education Platform for Web3 Data Analysts`
export const META_DESCRIPTION = `House of Wizard is an education platform designed for aspiring and experienced Web3 data analysts. Learn blockchain analytics, on-chain data analysis, and Web3 insights.`
export const META_IMAGE = '/static/images/logo-fill.png'
export const META_KEYWORDS = `web3 data analysis, blockchain analytics, on-chain data analysis, web3 education, data analyst education`

const SITE_NAME = 'House of Wizard'

export const META: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: META_KEYWORDS,
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: META_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: META_IMAGE,
        width: 1200,
        height: 630,
        alt: META_TITLE,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: META_TITLE,
    description: META_DESCRIPTION,
    site: META_URL,
    creator: SITE_NAME,
    images: [META_IMAGE],
  },
  icons: {
    icon: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
    shortcut: '/favicon/favicon.ico',
    other: {
      rel: 'shortcut icon',
      url: '/favicon/favicon.ico',
    },
  },
} as const
