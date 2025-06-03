import { useEffect } from 'react'
import Head from 'next/head'

export default function StudioPage() {
  useEffect(() => {
    // Redirect to Sanity's hosted studio
    window.location.href = 'https://dvy4l5vj.sanity.studio'
  }, [])

  return (
    <>
      <Head>
        <title>Redirecting to Sanity Studio...</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Redirecting to Sanity Studio...
          </h1>
          <p className="text-gray-600 mb-6">
            You're being redirected to your Sanity Studio...
          </p>
          <div className="space-y-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p className="text-sm text-gray-500">
              If you're not redirected automatically, 
              <a 
                href="https://dvy4l5vj.sanity.studio" 
                className="text-blue-600 hover:text-blue-800 font-medium ml-1"
              >
                click here
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
} 