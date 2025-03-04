import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { TwitterIcon, GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import SocialLink from '@/components/SocialLink'
import siteMetadata from '@/data/siteMetadata'

// Dummy projects data
const projects = [
  {
    title: 'Project One',
    description: 'A beautiful web application',
    image: 'https://placehold.co/800x600/4A90E2/ffffff?text=Project+One',
    link: '#'
  },
  {
    title: 'Project Two',
    description: 'Mobile app design',
    image: 'https://placehold.co/800x600/50E3C2/ffffff?text=Project+Two',
    link: '#'
  },
  {
    title: 'Project Three',
    description: 'Brand identity design',
    image: 'https://placehold.co/800x600/F5A623/ffffff?text=Project+Three',
    link: '#'
  },
  {
    title: 'Project Four',
    description: 'UI/UX design system',
    image: 'https://placehold.co/800x600/D0021B/ffffff?text=Project+Four',
    link: '#'
  }
]

const Home = () => {
  return (
    <>
      <Head>
        <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      {/* Hero Section */}
      <Container className="mt-24 sm:mt-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-primaryText-800 sm:text-7xl">
            Digital designer & developer
          </h1>
          <p className="mt-6 text-xl text-primaryText-600">
            I create beautiful digital experiences that help businesses grow and succeed online. With a focus on user experience and modern design principles.
          </p>
          <div className="flex gap-6 mt-8">
            <SocialLink
              href={siteMetadata.socials.twitter}
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href={siteMetadata.socials.github}
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href={siteMetadata.socials.linkedin}
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>

      {/* Projects Grid */}
      <Container className="mt-24 sm:mt-32">
        <h2 className="text-3xl font-bold tracking-tight text-primaryText-800">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2">
          {projects.map((project, index) => (
            <Link 
              key={index} 
              href={project.link}
              className="group relative overflow-hidden rounded-3xl bg-primaryText-100"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-8 text-white">
                <h3 className="font-semibold text-xl">{project.title}</h3>
                <p className="mt-2 text-white/80">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>

      {/* Contact Section */}
      <Container className="mt-24 sm:mt-32 mb-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-primaryText-800">
            Let's work together
          </h2>
          <p className="mt-6 text-lg text-primaryText-600">
            I'm currently available for freelance work. If you have a project that you want to get started, think you need my help with something or just fancy saying hey, then get in touch.
          </p>
          <div className="mt-8">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primaryText-900 rounded-full hover:bg-primaryText-700"
            >
              Contact me
            </a>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Home
