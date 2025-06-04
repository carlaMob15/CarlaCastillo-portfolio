import Head from 'next/head'
import { useEffect } from 'react'

export default function StudioPage() {
  useEffect(() => {
    // Redirect to external studio
    if (typeof window !== 'undefined') {
      window.location.href = 'https://webcreativity.sanity.studio'
    }
  }, [])

  return (
    <>
      <Head>
        <title>Redirecting to Sanity Studio...</title>
        <meta httpEquiv="refresh" content="2; url=https://webcreativity.sanity.studio" />
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="mb-8">
            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Redirecting to Content Studio
            </h1>
            <p className="text-gray-600">
              Taking you to your content management system...
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <p className="text-sm text-gray-500 mb-3">
              If you're not redirected automatically:
            </p>
            <a 
              href="https://webcreativity.sanity.studio" 
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Open Content Studio
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  )
} 