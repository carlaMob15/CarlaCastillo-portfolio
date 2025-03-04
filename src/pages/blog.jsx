import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/Container'
import siteMetadata from '@/data/siteMetadata'

// Dummy blog posts data
const posts = [
  {
    title: 'Getting Started with Next.js',
    description: 'Learn how to build modern web applications with Next.js and React',
    date: 'March 15, 2024',
    category: 'Development',
    image: 'https://placehold.co/600x400/4A90E2/ffffff?text=Next.js',
    href: '/blog/getting-started-nextjs'
  },
  {
    title: 'Mastering Tailwind CSS',
    description: 'A comprehensive guide to styling with Tailwind CSS',
    date: 'March 10, 2024',
    category: 'Design',
    image: 'https://placehold.co/600x400/50E3C2/ffffff?text=Tailwind',
    href: '/blog/mastering-tailwind'
  },
  {
    title: 'The Future of Web Development',
    description: 'Exploring upcoming trends and technologies in web development',
    date: 'March 5, 2024',
    category: 'Technology',
    image: 'https://placehold.co/600x400/F5A623/ffffff?text=Future+Web',
    href: '/blog/future-web-development'
  },
  {
    title: 'Building Responsive Layouts',
    description: 'Tips and tricks for creating responsive web designs',
    date: 'March 1, 2024',
    category: 'Design',
    image: 'https://placehold.co/600x400/D0021B/ffffff?text=Responsive',
    href: '/blog/responsive-layouts'
  }
]

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog - {siteMetadata.author}</title>
        <meta name="description" content="Latest articles and posts" />
      </Head>

      <Container className="mt-16 sm:mt-32">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-primaryText-800 sm:text-5xl">
            Latest Posts
          </h1>
          <p className="mt-6 text-lg text-primaryText-600">
            Thoughts, ideas, and insights about web development, design, and technology.
          </p>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {posts.map((post, index) => (
              <article key={index} className="relative group">
                <div className="relative w-full h-64 overflow-hidden rounded-2xl bg-primaryText-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-primaryText-500">{post.date}</span>
                    <span className="text-sm font-medium text-accent-600">{post.category}</span>
                  </div>
                  <h2 className="mt-2 text-xl font-semibold text-primaryText-800">
                    <Link href={post.href} className="hover:text-accent-600 transition">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-2 text-base text-primaryText-600">
                    {post.description}
                  </p>
                  <div className="mt-4">
                    <Link
                      href={post.href}
                      className="text-sm font-medium text-accent-600 hover:text-accent-700"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </>
  )
} 