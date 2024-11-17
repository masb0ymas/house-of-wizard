import type { LinksFunction } from '@remix-run/node'
import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from '@remix-run/react'
import { Button } from './components/ui/button'
import { Toaster } from './components/ui/toaster'
import styles from './tailwind.css?url'

import '@vidstack/react/player/styles/base.css'
import '@vidstack/react/player/styles/plyr/theme.css'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles },
  { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
  { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
  { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
  { rel: 'manifest', href: '/site.webmanifest' },
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap',
  },
]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <Toaster />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

export function ErrorBoundary() {
  const error = useRouteError()

  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
          <title>Page Not Found</title>
        </head>
        <body>
          <div className="h-screen flex justify-center items-center bg-gradient-to-br from-indigo-100 via-white to-purple-100">
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col items-center">
                <h1 className="font-bold text-7xl">404</h1>
                <h2 className="font-bold text-4xl">Page Not Found</h2>
              </div>
              <p className="mt-4 flex justify-center">
                {
                  "Oops! The page you're looking for doesn't exist. It might have been moved or deleted."
                }
              </p>
              <Button radius={'xl'}>
                <Link to="/">Go Back</Link>
              </Button>
            </div>
          </div>
          <Scripts />
        </body>
      </html>
    )
  }

  if (isRouteErrorResponse(error) && error.status === 500) {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
          <title>Error</title>
        </head>
        <body>
          <div className="h-screen flex justify-center items-center bg-gradient-to-br from-indigo-100 via-white to-purple-100">
            <div className="flex flex-col items-center gap-4">
              <h1 className="font-bold text-4xl">Oops! Something went wrong.</h1>
              <p className="mt-4 flex justify-center">Sorry, an unexpected error has occurred.</p>
            </div>
          </div>
          <Scripts />
        </body>
      </html>
    )
  }
}
