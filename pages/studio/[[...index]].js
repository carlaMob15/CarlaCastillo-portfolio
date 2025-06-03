import Head from 'next/head'

export default function StudioPage() {
  return (
    <>
      <Head>
        <title>Redirecting to Sanity Studio...</title>
        <meta httpEquiv="refresh" content="0; url=https://dvy4l5vj.sanity.studio" />
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Redirecting to Sanity Studio...
          </h1>
          <p className="text-gray-600 mb-6">
            You're being redirected to your content management system.
          </p>
          <div className="space-y-4">
            <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-sm text-gray-500">
              If you're not redirected automatically, 
              <a 
                href="https://dvy4l5vj.sanity.studio" 
                className="text-blue-600 hover:text-blue-800 font-medium ml-1"
              >
                click here to access your CMS
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
} 