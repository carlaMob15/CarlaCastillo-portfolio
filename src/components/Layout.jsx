import { Header } from './Header'
import { Footer } from './Footer'
import { getSiteSettings, getNavigationLinks } from '../../lib/sanity-queries'
import { useEffect, useState } from 'react'

export function Layout({ children, siteSettings: initialSiteSettings, navigationLinks: initialNavLinks }) {
  const [siteSettings, setSiteSettings] = useState(initialSiteSettings)
  const [navigationLinks, setNavigationLinks] = useState(initialNavLinks)

  return (
    <div className="min-h-screen flex flex-col">
      <Header siteSettings={siteSettings} navigationLinks={navigationLinks} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer siteSettings={siteSettings} />
    </div>
  )
}

// Helper function to get layout data for pages
export async function getLayoutData() {
  try {
    const [siteSettings, navigationLinks] = await Promise.all([
      getSiteSettings(),
      getNavigationLinks()
    ])

    return {
      siteSettings: siteSettings || null,
      navigationLinks: navigationLinks || []
    }
  } catch (error) {
    console.error('Error fetching layout data:', error)
    return {
      siteSettings: null,
      navigationLinks: []
    }
  }
} 