import {
  IconBrandDiscord,
  IconBrandTelegram,
  IconBrandTwitter,
  IconBrandYoutube,
  IconMail,
} from '@tabler/icons-react'

export const NavMenu = [
  {
    name: 'Webinar',
    link: '/webinar',
  },
  {
    name: 'Courses',
    link: '/',
  },
  {
    name: 'Resources',
    link: '/',
  },
  {
    name: 'Community',
    link: '/',
  },
]

export const FooterMenu = {
  courseCategories: [
    { name: 'Blockchain Basics', href: '#' },
    { name: 'DeFi Analytics', href: '#' },
    { name: 'Smart Contracts', href: '#' },
    { name: 'NFT Data Analysis', href: '#' },
  ],
  quickLinks: [
    { name: 'About Us', href: '/about' },
    { name: 'Career Paths', href: '#' },
    { name: 'Success Stories', href: '#' },
    { name: 'Blog', href: '#' },
  ],
  support: [
    { name: 'Help Center', href: '#' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Contact Us', href: '/contact' },
  ],
  socialMedia: [
    // { name: 'facebook', icon: IconBrandFacebook, href: '/' },
    // { name: 'instagram', icon: IconBrandInstagram, href: '/' },
    {
      name: 'twitter',
      icon: IconBrandTwitter,
      href: 'https://x.com/House_of_Wizard',
    },
    {
      name: 'discord',
      icon: IconBrandDiscord,
      href: 'https://discord.gg/zbDrjC4art',
    },
    {
      name: 'youtube',
      icon: IconBrandYoutube,
      href: 'https://www.youtube.com/@gulalijawa5870',
    },
    {
      name: 'telegram',
      icon: IconBrandTelegram,
      href: 'https://t.me/HouseofWizard',
    },
    { name: 'mail', icon: IconMail, href: 'mailto:info@house-of-wizard.xyz' },
  ],
}
