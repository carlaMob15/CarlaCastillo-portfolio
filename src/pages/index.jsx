import Head from 'next/head'
import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { ProjectCard } from '../components/ProjectCard'
import ContactPurpleBlock from '../components/ContactPurpleBlock'
import siteMetadata from '../data/siteMetadata'
import { projectsData } from '../data/projectsData'
import { FadeIn, FadeInStagger } from '../components/Motion'
import Link from 'next/link'

const Home = () => {
  // Sort projects by most recent year (descending)
  const sortedProjects = [...projectsData].sort((a, b) => {
    const getYear = (timeline) => {
      if (!timeline) return 0;
      const match = timeline.match(/\d{4}/g);
      return match ? parseInt(match[match.length - 1], 10) : 0;
    };
    return getYear(b.timeline) - getYear(a.timeline);
  });
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
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.5] md:leading-[2] lg:leading-[1.5] text-neutral-900 dark:text-neutral-100 mb-16 text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Creating <span className="text-[rgb(99,102,241)]">intuitive</span>, accessible digital experiences that solve <span className="text-[rgb(99,102,241)]">complex problems</span> with <span className="text-[rgb(99,102,241)]">beautiful</span>, thoughtful design
              <span className="inline-block align-baseline ml-2 w-2.5 h-2.5 md:w-4 md:h-4 rounded-full bg-[rgb(99,102,241)]" style={{ verticalAlign: 'baseline' }}></span>
            </motion.h1>
            <div className="flex flex-col items-start gap-8 mt-10 sm:mt-16 w-full">
              {/* Body Copy and Link */}
              <div className="text-lg text-neutral-800 dark:text-neutral-100 max-w-2xl text-left flex flex-col items-start gap-8">
                <div className="leading-relaxed">
                  WC Web Creativity is a digital design studio helping brands, artists, and founders build meaningful websites and digital products through smart UX and beautiful UI design. With over a decade of experience in web design, SaaS platforms, and mobile app design, we create intuitive, scalable solutions—turning complex challenges into clean, user-first digital experiences.
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* Projects Grid */}
      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100">
            Featured Work
          </h2>
        </FadeIn>
        <Container.Grid 
          cols={1} 
          smCols={1} 
          mdCols={2} 
          gap={8}
          className="mt-16"
        >
          {sortedProjects
            .filter(project => project.title && project.slug && project.description)
            .slice(0, 5)
            .map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
        </Container.Grid>
      </Container>

      {/* Contact Section */}
      <Container>
        <ContactPurpleBlock className="mt-24 sm:mt-32 mb-16" />
      </Container>
    </>
  )
}

export default Home
