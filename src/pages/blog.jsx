import Head from 'next/head'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { SimpleLayout } from '@/components/SimpleLayout'
import siteMetadata from '@/data/siteMetadata'

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog - {siteMetadata.title}</title>
        <meta
          name="description"
          content="Thoughts on programming, design, and more."
        />
      </Head>
      <SimpleLayout
        title="Blog"
        intro="Coming soon! This is where I'll share my thoughts on programming, design, and more."
      >
        <div className="flex items-center justify-center min-h-[200px]">
          <p className="text-lg text-primaryText-600">Check back soon for blog posts!</p>
        </div>
      </SimpleLayout>
    </>
  )
} 