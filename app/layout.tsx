import '../style/base.css'
import '../style/layout.css'
import '../style/navigation.css'
import '../style/footer.css'
import '../style/contact.css'

import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        //'text-black bg-white dark:text-white dark:bg-black',
        'text-white bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased body-container">
        <main className="flex-auto min-w-0 main-content">
          <Navbar />
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
