import Head from 'next/head'
import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { ProjectCard } from '../components/ProjectCard'
import WorkTogether from '../components/WorkTogether'
import siteMetadata from '../data/siteMetadata'
import { projectsData } from '../data/projectsData'
import { FadeIn, FadeInStagger } from '../components/Motion'
import Link from 'next/link'

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
          <div className="max-w-4xl">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-neutral-800 dark:text-neutral-100 mb-8 text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Creating intuitive, accessible digital experiences that solve complex problems
              <br className="hidden sm:block" />
              through beautiful design
            </motion.h1>
            <div className="flex flex-col sm:flex-row items-start gap-8 sm:gap-12 mt-10 sm:mt-16 w-full">
              {/* Body Copy and Link */}
              <div className="text-lg text-neutral-800 dark:text-neutral-100 max-w-xl text-left flex flex-col items-start gap-6">
                <div>
                  Hello! I'm Carla Castillo, a Senior UI/UX Designer with over 10 years of experience in crafting intuitive web, SaaS, and mobile applications. I specialise in building comprehensive design systems and creating inclusive digital experiences—transforming complex challenges into beautiful, functional solutions.
                </div>
                <Link 
                  href="/projects"
                  className="text-sm font-medium hover:text-[#4f46e5] transition-colors duration-200"
                >
                  View my <span className="text-[#6366f1]">work</span> →
                </Link>
              </div>
              {/* Placeholder Image */}
              <div
                className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-neutral-300 mt-6 sm:mt-0 mx-auto sm:mx-0"
                aria-label="Profile placeholder"
              />
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* Projects Grid */}
      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100">
            Featured Projects
          </h2>
        </FadeIn>
        <Container.Grid 
          cols={1} 
          smCols={1} 
          mdCols={2} 
          gap={8}
          className="mt-16"
        >
          {projectsData.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </Container.Grid>
      </Container>

      {/* Contact Section */}
      <WorkTogether />
    </>
  )
}

export default Home
