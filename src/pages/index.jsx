import Head from 'next/head'
import { motion } from 'framer-motion'
import { Container } from '@/components/Container'
import { TwitterIcon, GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import SocialLink from '@/components/SocialLink'
import { ProjectCard } from '@/components/ProjectCard'
import WorkTogether from '@/components/WorkTogether'
import siteMetadata from '@/data/siteMetadata'
import { projectsData } from '@/data/projectsData'
import { FadeIn, FadeInStagger } from '@/components/Motion'

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
        <FadeIn>
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl font-bold tracking-tight text-neutral-800 sm:text-7xl dark:text-neutral-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Digital designer & developer
            </motion.h1>
            <motion.p 
              className="mt-6 text-xl text-neutral-600 dark:text-neutral-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I create beautiful digital experiences that help businesses grow and succeed online. With a focus on user experience and modern design principles.
            </motion.p>
            <motion.div 
              className="flex gap-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
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
            </motion.div>
          </div>
        </FadeIn>
      </Container>

      {/* Projects Grid */}
      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100">
            Featured Projects
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2">
          {projectsData.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>

      {/* Contact Section */}
      <WorkTogether />
    </>
  )
}

export default Home
